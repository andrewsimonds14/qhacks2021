import styled, { css } from 'styled-components';

export const TopBar = styled.div`
	width: 100%;
	display: flex;
    flex-direction: row;
    justify-content: space-between;
	align-items: center;
    padding: 0.25em 0;
	position: fixed;
	z-index: 10;

	position: fixed;
	top: 0;
	height: 100px;

	background-color: ${(props) => props.theme.colors.grey1};
`;

export const LogoWrapper = styled.img`
	width: 10%;
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	padding: 0 0.5em;
	width: 50%;
	${(props) => props.logo
		&& css`
			justify-content: flex-start;
        `}
`;

export const NavText = styled.div`
	color: ${(props) => props.theme.colors.myPurple};
	font-family: ${(props) => props.theme.fonts.familyHeader};
	font-weight: ${(props) => props.theme.fonts.weightRegular};
	font-size: 250%;
	padding: 0 0.5em;
	${(props) => props.logo
		&& css`
			font-size: 300%;
        `}
`;
