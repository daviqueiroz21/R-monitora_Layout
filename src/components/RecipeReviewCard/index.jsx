import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import VideoJS from '../../components/VideoJs';
import { Video } from './styles';
import './style.css';

export default function RecipeReviewCard(props) {
	const { cnpj, keystream, nomeEcv, number } = props;
	const playerRef = React.useRef(null);

	const handlePlayerReady = (player) => {
		playerRef.current = player;

		// You can handle player events here, for example:
		player.on('error', function () {
			// player.error(null);
			player.error(null);
		});

		player.on('waiting', () => {});

		player.on('dispose', () => {});
	};
	return (
		<Card
			className="card_container"
			sx={{ maxWidth: 270, minWidth: 270, margin: 1 }}
		>
			<CardHeader subheader={`R-monitora ${number}`} />
			<Video sx={{ maxWidth: 300, minWidth: 300 }} ref={playerRef}>
				<VideoJS
					options={{
						autoplay: true,
						controls: true,
						responsive: true,
						fluid: true,
						muted: true,
						liveTracker: true,
						inactivityTimeout: 0,
						sources: [
							{
								src: `http://143.244.166.170:8088/hls/${keystream}.m3u8`,
								type: 'application/vnd.apple.mpegurl',
							},
						],
					}}
					onReady={handlePlayerReady}
				/>
			</Video>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					<b>RAZAO: </b>
					{nomeEcv}
					<br></br>
					<b>CNPJ: </b>
					{cnpj}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}
