import styled, { css } from 'styled-components';

export const Parent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;
export const BackgroundImage = styled.div`
	margin-top: 100px;
	display: block;
	background-position: center;
	background-size: cover;
	height: 1000px;
	${(props) =>
		props.background &&
		css`
			background-image: ${() => `url(${props.background})`};
		`}
	${(props) =>
		props.climber &&
		css`
			height: 300px;
		`}
`;
