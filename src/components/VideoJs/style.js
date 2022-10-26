import styled from 'styled-components';

export const VideoContainer = styled.div`
	display: flex;
	margin: 50px;
	border-radius: 8px;
	padding: 30px;
	border: 1px solid #e4e9f2;
	flex-wrap: wrap;
	justify-content: center;
`;

export const VideoCard = styled.div`
	display: flex;
	width: 100%;
	height: max-content;
	justify-content: center;
	align-items: center;
	font-size: 24px;
	margin: 5px;
	.icon {
		color: #ffffff;
		position: absolute;
		cursor: pointer;
		padding: 10px;
		z-index: 555;
	}
`;
