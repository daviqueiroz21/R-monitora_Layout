import React from 'react';
import { DefaulBtn } from '../../components/Button/styles';
import { Input } from '../../components/TextInput/styles';
import './style.css';
import { IoClose } from 'react-icons/io5';
import { ModalStyle } from './styles';

const Modal = ({ setModalShow }) => {
	function exitModal() {
		setModalShow(false);
	}

	function handleFormPropagation(e) {
		e.stopPropagation();
	}
	return (
		<div className="bg_account" onClick={exitModal}>
			<ModalStyle className="container_acount">
				<IoClose size={24} onClick={exitModal} className="btn_exit" />

				<form onClick={handleFormPropagation}>
					<h3 className="title_account">Conta</h3>

					<label htmlFor="">Nome</label>
					<Input className="input_account"></Input>

					<label htmlFor="">E-mail</label>
					<Input className="input_account"></Input>

					<label htmlFor="">Senha</label>
					<Input className="input_account"></Input>

					<DefaulBtn className="btn_login">Atualizar</DefaulBtn>
				</form>
			</ModalStyle>
		</div>
	);
};

export default Modal;
