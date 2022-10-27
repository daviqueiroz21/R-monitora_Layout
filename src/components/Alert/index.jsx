/* eslint-disable no-useless-return */
import React, { useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts(props) {
	const { setErro, mensagem } = props;
	useEffect(() => {
		setTimeout(() => {
			setErro(null);
		}, 3000);

		return;
	});
	return (
		<Stack sx={{ position: 'absolute', top: 20, right: 0 }} spacing={2}>
			<Alert severity="error">{mensagem}</Alert>
		</Stack>
	);
}
