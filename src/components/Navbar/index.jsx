/* eslint-disable indent */
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import logoWhite from '../../assets/logo_white.png';
import api from '../../services/api';
import { getItem, removeItem } from '../../utils/storageLogin';
import './style.css';

const pages = ['Inicio', 'Cameras', 'Consulta'];
const settings = ['Conta', 'Cameras', 'Sair'];

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const navigate = useNavigate();
	const token = getItem('token');
	const [user, setUser] = React.useState([]);

	const handleMenuItens = (event) => {
		if (event.target.innerHTML === 'Sair') {
			removeItem('token');
			removeItem('userId');
			navigate('/');
			window.location.reload(false);
		}

		if (event.target.innerHTML === 'Cameras') {
			navigate('/cameras');
		}
	};

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handlePages = (event) => {
		const escolha = event.currentTarget.innerText;

		if (escolha === 'Consulta' || escolha === 'CONSULTA') {
			navigate('/consulta');
		} else if (escolha === 'CAMERAS' || escolha === 'Cameras') {
			navigate('/cameras');
		} else if (escolha === 'INICIO' || escolha === 'Inicio') {
			navigate('/inicio');
		}
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleDetailsUser = async () => {
		try {
			const response = await api.get('/userLogged', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			return setUser(response.data);
		} catch (error) {}
	};

	useEffect(() => {
		handleDetailsUser();
		if (!token) {
			navigate('/');
		}
	}, [token]);
	return (
		<div className="container_all">
			<AppBar className="appBar" position="static">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="/"
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							<img src={logoWhite} alt="Logo" className="logo_dashboard" />
						</Typography>

						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								{pages.map((page) => (
									<MenuItem key={page} onClick={handlePages}>
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Typography
							variant="h5"
							noWrap
							component="a"
							href=""
							sx={{
								mr: 2,
								display: { xs: 'flex', md: 'none' },
								flexGrow: 1,
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							<img src={logoWhite} alt="Logo" className="logo_dashboard" />
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={handlePages}
									sx={{ my: 2, color: 'white', display: 'block' }}
								>
									{page}
								</Button>
							))}
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Abrir Configurações">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar
										alt={`${user.nome}`}
										src="/static/images/avatar/2.jpg"
										className="buttonSettings"
									/>
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: '45px' }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{settings.map((setting) => (
									<MenuItem key={setting} onClick={handleCloseUserMenu}>
										<Typography onClick={handleMenuItens} textAlign="center">
											{setting}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<section className="line_around">
				<Outlet />
			</section>
		</div>
	);
};
export default ResponsiveAppBar;
