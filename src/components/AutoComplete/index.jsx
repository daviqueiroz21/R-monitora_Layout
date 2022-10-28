import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { getItem } from '../../utils/storageLogin';

export default function Playground() {
	const navigate = useNavigate();
	const token = getItem('token');
	const [ListCameras, SetListCameras] = useState([]);
	const defaultProps = {
		options: ListCameras,
		getOptionLabel: (option) => option.razao,
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
		<Stack spacing={1} sx={{ width: 300 }}>
			<Autocomplete
				{...defaultProps}
				id="select-on-focus"
				selectOnFocus
				renderInput={(params) => (
					<TextField
						{...params}
						label="Digite o nome da ECV"
						variant="standard"
					/>
				)}
			/>
		</Stack>
	);
}
