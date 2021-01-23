import React from 'react';
import { CardTitle, StyledContainer, CardImage, CardSubTitle } from './homeCard.styles';

const printTest = () => { };

const HomeCard = (props) => (
  <StyledContainer
    start={props.start}
    onClick={props.onClick ? props.onClick : printTest()}
  >
    <CardImage>{props.img}</CardImage>
    <CardTitle>{props.action}</CardTitle>
    <CardSubTitle>{props.more}</CardSubTitle>
  </StyledContainer>
);

export default HomeCard;
