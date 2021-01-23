import styled, {css} from 'styled-components';

export const Parent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;
export const BackgroundImage = styled.div`
    margin-top: 7em;
    display: block;
    background-position: center;
    background-size: cover;
	height: 800px;
    ${(props) => props.background
        && css`
            background-image: ${() => `url(${props.background})`};
        `}
    ${(props) => props.climber
        && css`
            height: 300px;
        `}
`;

export const TitleTextWrapper = styled.div`
    position: absolute;
    top: 90%;
    left: 25%;
    transform: translate(0%,-50%);
    padding: 3em;
    ${(props) => props.background
        && css`
			background-image: ${() => props.background};
        `}
`;

export const MainText = styled.div`
	color: ${(props) => props.theme.colors.textPrimary};
	font-family: ${(props) => props.theme.fonts.familyHeader};
	font-weight: ${(props) => props.theme.fonts.weightHeavy};
    font-size: 400%;
`;

