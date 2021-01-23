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
	padding: 0.25em 0.5em;
	margin-top: 1.6em;
	font-size: 300%;
	align-self: center;
`;

export const OwnerSignUpContainer = styled.div`
	background-color: ${(props) => props.theme.colors.elevatedBackgroundPrimary};
	border: 4px solid ${(props) => props.theme.colors.darkRed};

	display: flex;
	flex-direction: row;
	align-items: space-evenly; //Perpendicular to flex direction
	justify-content: flex-start; //Along flex direction
`;

export const SquatImage = styled.img`
	width: 50%;
	display: block;
`;

export const OwnerSignUpFormWrapper = styled.div`
	width: 50%;
	display: flex;
	flex-direction: row;
	align-items: center; //Perpendicular to flex direction
	justify-content: center; //Along flex direction
`;

export const OwnerSignUpText = styled.div`
	color: ${(props) => props.theme.colors.darkRed};
	font-family: ${(props) => props.theme.fonts.familyHeader};
	font-weight: ${(props) => props.theme.fonts.weightMedium};
	padding: 0.6em 0.5em;
	font-size: 200%;
	align-self: center;
`;
