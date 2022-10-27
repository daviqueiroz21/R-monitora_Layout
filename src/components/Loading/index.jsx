import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './style.css';

export default function CircularIndeterminate() {
	return (
		<Box className="box_bg" sx={{ display: 'flex' }}>
			<CircularProgress className="progress" />
		</Box>
	);
}
