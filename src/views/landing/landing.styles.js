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
	height: 1400px;
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

export const MainText = styled.div`
	color: ${(props) => props.theme.colors.textPrimary};
	font-family: ${(props) => props.theme.fonts.familyHeader};
	font-weight: ${(props) => props.theme.fonts.weightHeavy};
	font-size: 400%;
`;

export const SubText = styled(MainText)`
	color: ${(props) => props.theme.colors.darkRed};
	font-weight: ${(props) => props.theme.fonts.weightRegular};
	font-size: 250%;
`;

export const AboutWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-text: center;
	background-color: ${(props) => props.theme.colors.grey2};
	padding: 4em 0;
`;

export const AboutTitle = styled(SubText)`
	font-weight: ${(props) => props.theme.fonts.weightRegular};
	font-size: 250%;
	align-self: center;
	margin: 1.5em 1em 1em 1em;
`;

export const AboutSubTitle = styled(AboutTitle)`
	font-size: 170%;
	margin: 0 1em 1.5em 0;
`;

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;
