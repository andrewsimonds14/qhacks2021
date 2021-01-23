import styled, { css } from 'styled-components';

export const FooterWrap = styled.div`
	background-color: ${(props) => props.theme.colors.red};
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;

export const FooterText = styled.div`
	color: ${(props) => props.theme.colors.grey1};
	font-family: ${(props) => props.theme.fonts.familyHeader};
	font-weight: ${(props) => props.theme.fonts.weightRegular};
	font-size: 250%;
	align-self: center;
	margin: 1em;
`;

export const FooterSubText = styled(FooterText)`
	color: ${(props) => props.theme.colors.grey1};
	font-size: 200%;
	${(props) =>
		props.small &&
		css`
			font-size: 100%;
		`}
`;

export const IconList = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const FooterTextList = styled(IconList)`
	justify-content: space-evenly;
`;

export const IconWrapper = styled.div`
	width: 2%;
	margin: 2em 4em;
`;
