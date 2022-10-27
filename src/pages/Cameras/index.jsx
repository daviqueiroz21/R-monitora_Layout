import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import ComboBox from '../../components/AutoComplete';
import RecipeReviewCard from '../../components/RecipeReviewCard';
import { getItem } from '../../utils/storageLogin';
import { VideoContainer } from './style.js';
import './style.css';

export default function Cameras() {
	const navigate = useNavigate();
	const token = getItem('token');
	const [ListCameras, SetListCameras] = useState([]);
	let count = 0;

	/* 	const [reloadVideo, forceReloadVideo] = useReducer(x => x + 1, 0);
	 */
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
		<>
			<div className="sectionSearch">
				<ComboBox />
			</div>
			<VideoContainer>
				{ListCameras.map((camera) => (
					<RecipeReviewCard
						number={(count += 1)}
						key={camera.id}
						cnpj={camera.cnpj}
						keystream={camera.key_rtmp}
						nomeEcv={camera.razao}
					/>
				))}
			</VideoContainer>
		</>
	);
}
