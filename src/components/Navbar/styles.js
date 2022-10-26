import styled from 'styled-components';

export const NavbarStyle = styled.nav`
  position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px 20px;
	background: #222b45;
	border-bottom: 1px solid #a7a9ac;
	justify-content: space-between;
	section {
		display: flex;
		gap: 10px;
		align-items: center;
		color: #000;
		h1 {
			margin: 0 20px;
		}
		h2 {
			text-align: center;
		}
	}
	.icon {
		margin: 0 20px;
		cursor: pointer;
		color: #ffffff;
		transition: 0.3s ease-in;
		&:hover {
			transform: scale(1.1);
		}
	}
	.searchIcon {
		cursor: pointer;
		color: #ffffff;
	}

	.show {
		display: block !important;
	}
`;
export const User = styled.section`
	background: #f7f9fc;
	display: flex;
	border: 1px solid #e4e9f2;
	border-radius: 8px;
	padding: 2px 10px;
	cursor: default;
	button {
		display: none;
		cursor: pointer;
		transition: 0.3s ease-in;
		&:hover {
			transform: scale(1.1);
		}
	}
	&:hover {
		button {
			display: block;
		}
	}
	h2 {
		font-size: 16px;
	}
`;
