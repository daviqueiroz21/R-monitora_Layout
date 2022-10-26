import styled from 'styled-components';
export const Container = styled.div`
	background: #000;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	background-size: cover;
	background-repeat: no-repeat;
`;

export const Box = styled.section`
	background: #ffffff;
	box-shadow: 7px 7px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 50px;
	width: max-content;
	height: max-content;
	margin: 0 auto;
	label {
		text-align: justify;
		margin-left: 3px;
	}
	a {
		color: #222b45;
		align-self: center;
		text-decoration: none;
		&:hover {
			transform: scale(1.01);
		}
	}
	div {
		display: flex;
		align-items: center;
    	width:100%;
	}
	.icon {
		display: flex;
		position: relative;
		border: 1px solid #e4e9f2;
		background: #f7f9fc;
		padding: 12.5px 16px;
		border-radius: 8px;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		cursor: pointer;
	}
	.email {
		cursor: default;
	}
	input {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
	img {
		justify-self: center;
		align-self: center;
		width: 104%;
		margin-bottom: 10px;
	}
`;