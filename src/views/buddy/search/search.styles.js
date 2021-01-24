import styled from 'styled-components';

export const SignUpContainer = styled.div`
	background-color: ${(props) => props.theme.colors.elevatedBackgroundPrimary};
	border: 12px solid ${(props) => props.theme.colors.darkRed};
  height: 1000px;
  width: 1690px;
	display: flex;
	flex-direction: row;
	align-items: speac-evenly; //Perpendicular to flex direction
	justify-content: flex-start; //Along flex direction
`;