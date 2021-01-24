import styled from 'styled-components';

export const Parent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

export const SignUpContainer = styled.div`
	background-color: ${(props) => props.theme.colors.elevatedBackgroundPrimary};
	height: 1000px;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-self: center; //Perpendicular to flex direction
	padding-top: 7.5em;
`;
