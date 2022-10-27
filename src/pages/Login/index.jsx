import React, { useEffect, useState } from 'react';
import { DefaulBtn } from '../../components/Button/styles';
import { Input } from '../../components/TextInput/styles';
import { Box, Container } from './styles';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo_input.png';
import api from '../../services/api';
import { getItem, setItem } from '../../utils/storageLogin';
import './style.css';
import CircularIndeterminate from '../../components/Loading';
import BasicAlerts from '../../components/Alert';

function Login() {
	const [formLogin, setFormLogin] = useState({ email: '', senha: '' });
	const [loading, setloading] = useState(false);
	const [erro, setErro] = useState(null);
	const navigate = useNavigate();
	function handleChangeInput(e) {
		setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
	}

	useEffect(() => {
		const token = getItem('token');

		if (token) {
			navigate('/inicio');
		}
	}, []);

	async function handleSubmit(e) {
		e.preventDefault();
		setloading(true);
		try {
			const response = await api.post('/login', {
				...formLogin,
			});

			const {
				token,
				usuario: { id },
			} = response.data;
			setItem('userId', id);
			setItem('token', token);
			navigate('/inicio');
		} catch (error) {
			setErro(error.response.data);
			console.log(error.response.data);
			setloading(false);
		}
	}

	const [showPass, setShowPass] = useState('password');
	const handleChangePass = () => {
		setShowPass(showPass === 'password' ? 'text' : 'password');
	};

	return (
		<Container className="container">
			{erro && <BasicAlerts mensagem={erro.mensagem} setErro={setErro} />}
			<form onSubmit={handleSubmit}>
				<Box className="box">
					<img src={logo} alt="Logo" />
					<label htmlFor="email">Login</label>
					<div>
						<Input
							name="email"
							type="email"
							placeholder="example@example.com"
							onChange={handleChangeInput}
							value={formLogin.email}
							required
						/>
						<MdAlternateEmail size={16} className="icon email" />
					</div>
					<label htmlFor="senha">Senha</label>
					<div>
						<Input
							name="senha"
							type={showPass}
							placeholder="********"
							onChange={handleChangeInput}
							value={formLogin.senha}
							required
						/>
						{showPass === 'text' ? (
							<AiOutlineEyeInvisible
								size={16}
								onClick={handleChangePass}
								className="icon"
							/>
						) : (
							<AiOutlineEye
								size={16}
								onClick={handleChangePass}
								className="icon"
							/>
						)}
					</div>
					<DefaulBtn className="btn_login">Entrar</DefaulBtn>
					{loading && <CircularIndeterminate />}
					<a href="mailto:atendimento@renova.net">Esqueci minha senha</a>
				</Box>
			</form>
		</Container>
	);
}

export default Login;
