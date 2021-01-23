import styled, { css } from 'styled-components';

export const Parent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

export const WelcomeMessage = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 4em 0 2em 0;
`;

export const Title = styled.div`
	color: ${(props) => props.theme.colors.red};
	font-family: ${(props) => props.theme.fonts.familyHeader};
	font-weight: ${(props) => props.theme.fonts.weightStrong};
	margin-top: 1em;
	font-size: 300%;
	align-self: center;
	${(props) =>
		props.username &&
		css`
			color: ${(props) => props.theme.colors.darkRed};
		`}
`;

export const SubTitle = styled.div`
	color: ${(props) => props.theme.colors.red};
	font-family: ${(props) => props.theme.fonts.familyHeader};
	font-weight: ${(props) => props.theme.fonts.weightStrong};
	margin: 1em;
	font-size: 200%;
	align-self: center;
`;

export const ButtonWrapper = styled.div`
	width: 30%;
	margin: 2em 0 2em 10em;
	align-self: center;
`;
