import styled from 'styled-components';

export const Parent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

export const Title = styled.div`
	color: ${(props) => props.theme.colors.red};
	font-family: ${(props) => props.theme.fonts.familyHeader};
	font-weight: ${(props) => props.theme.fonts.weightStrong};
	padding: 0.6em 0.5em;
	font-size: 300%;
`;
