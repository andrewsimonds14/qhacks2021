import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center; //Perpendicular to flex direction
	justify-content: flex-start; //Along flex direction
	background-color: ${(props) => props.theme.colors.grey2};
	border-radius: 0.5em;
	margin: 0.5em 0em 1em 0;
	box-sizing: border-box;
	padding: 3.5em 2.5em;

	color: ${(props) => props.theme.colors.textPrimary};
	font-family: ${(props) => props.theme.fonts.familyHeader};
	font-weight: ${(props) => props.theme.fonts.weightStrong};

	width: 17.5%;

	:active {
		opacity: 0.6;
	}
	${(props) =>
		props.start &&
		css`
			color: ${() => props.theme.colors.elevatedBackgroundPrimary};
			background-color: ${() => props.theme.colors.green};
			border: 2px solid ${() => props.theme.colors.green};
		`}
`;

export const CardTitle = styled.div`
	text-align: center;
	font-size: 150%;
	padding-top: 0.5em;
`;

export const CardSubTitle = styled(CardTitle)`
	color: ${(props) => props.theme.colors.red};
	font-size: 125%;
`;

export const CardImage = styled.div`
	display: block;
`;
