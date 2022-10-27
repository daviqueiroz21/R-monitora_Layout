import React, { useState, useEffect } from 'react';
import './style.css';
import camright from '../../assets/right_cam.png';
import camleft from '../../assets/left_cam.png';
import Button from '@mui/material/Button';
import BasicAlerts from '../../components/Alert';
import { useNavigate } from 'react-router-dom';
import { getItem } from '../../utils/storageLogin';
import api from '../../services/api';
function Consulta() {
	const [camera, setCamera] = useState('');
	const [listCameras, SetListCameras] = useState([]);
	const [time, setTime] = useState('');
	const [localVideo, setLocalVideo] = useState('');
	const [erro, setErro] = useState(null);
	const navigate = useNavigate();
	const token = getItem('token');

	const handleSearchVideo = (event) => {
		event.preventDefault();

		if (!time || !camera) {
			setErro('Insira uma data e horario');
			return;
		}

		setLocalVideo(`/var/www/html/rec/${camera}-${time}.flv`);
	};

	const handleChangeInputs = (event) => {
		const item = event.target.value;

		if (event.target.name === 'cameras') {
			setCamera(item);
		}

		if (event.target.name === 'time') {
			setTime(String(item));
		}

		console.log(time, camera);
	};

	async function handleListCam() {
		try {
			const Listcameras = await api.get('/cameras', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			SetListCameras(Listcameras.data.camerasOn);
		} catch (error) {}
	}

	useEffect(() => {
		handleListCam();
		if (!token) {
			navigate('/');
		}
	}, []);
	return (
		<section>
			{erro && <BasicAlerts setErro={setErro} mensagem={erro} />}
			<div className="w50">
				<h1 className="title_shearch">Consulta</h1>
				<div className="">
					<img src={camright} alt="Camera" />
					<img src={camleft} alt="Camera" />
				</div>

				<select
					name="cameras"
					id=""
					className="inputs_syle"
					onChange={handleChangeInputs}
					value={camera}
				>
					<option value="">Cameras</option>
					{listCameras.map((cam) => (
						<option key={cam.id} value={cam.key_rtmp}>
							{cam.key_rtmp}
						</option>
					))}
				</select>
				<input
					name="time"
					className="inputs_syle"
					type="datetime-local"
					onChange={handleChangeInputs}
					value={time}
				/>
				<Button
					className="btn_query"
					variant="contained"
					color="success"
					onClick={handleSearchVideo}
				>
					Consultar
				</Button>
				{localVideo && (
					<video controls>
						<source src={localVideo} type="video/flv" />
					</video>
				)}
			</div>
		</section>
	);
}

export default Consulta;
