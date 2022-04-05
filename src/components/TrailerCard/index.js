import React from 'react';
import {
  CardOverlay,
  Container,
  Img,
  Number,
} from './styles';

const TrailerCard = ({ img, alt, order: number }) => {

  const strNumber = number.toString();
  const order = strNumber.padStart(2, '0');

  return (
    <Container>
      <CardOverlay degree={0} end={50} start={0} />
      <Img alt={alt} src={img} />
      <Number>{order}</Number>
    </Container>
  );
};

export default TrailerCard;
