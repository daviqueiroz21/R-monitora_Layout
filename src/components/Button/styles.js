import styled from 'styled-components';

export const DefaulBtn = styled.button`
	background: #ee693c;
	border-radius: 8px;
	padding: 16px 64px;
	margin: 10px 0;
	cursor: pointer;
	border: none;
	color: #ffff;
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 22px;
	text-align: center;
	text-transform: uppercase;
	&:hover {
		transform: scale(1.05);
		background-color: #f05723;
	}
`;

export const SmallBtn = styled.button`
	background: #ee693c;
	border-radius: 8px;
	padding: 6px 10px;
	margin: 5px 0;
	border: none;
	color: #ffff;
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	text-align: center;
	text-transform: uppercase;
	&:hover {
		transform: scale(1.05);
		background-color: #f05723;
	}
`;
export const SearchBtn = styled.button`
	background: transparent;
	border-radius: 8px;
	border: none;
	padding: 18px 0;
	margin: 0;
	color: #000;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	text-align: center;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		transform: scale(1.1);
	}
`;
