import styled from 'styled-components';

export const ModalStyle = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #fff;
	border-radius: 10px;
	padding: 10px;
	position: fixed;
	width: 25%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: black;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
