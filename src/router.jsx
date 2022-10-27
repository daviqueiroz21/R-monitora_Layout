import * as React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Consulta from './pages/Consulta';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import { getItem } from './utils/storageLogin';
import Inicio from './pages/Inicio';
import Cameras from './pages/Cameras';

export default function RouterMain() {
	function ProtectRouter() {
		const isAuthenticated = getItem('token');

		return isAuthenticated ? <Outlet /> : <Navigate to={'/'} />;
	}

	return (
		<nav>
			<Routes>
				<Route path="*" element={<Login />} />
				<Route path="/">
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
				</Route>

				<Route element={<ProtectRouter />}>
					<Route path="" element={<Navbar />}>
						<Route path="/inicio" element={<Inicio />} />
						<Route path="/cameras" element={<Cameras />} />
						<Route path="/consulta" element={<Consulta />} />
					</Route>
				</Route>
			</Routes>
		</nav>
	);
}
