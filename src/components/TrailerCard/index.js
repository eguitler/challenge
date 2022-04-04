import React from 'react';
import {
  Container,
  Number,
  Overlay,
  Img,
} from './styles';

const TrailerCard = ({ img, alt, order: number }) => {

  const strNumber = number.toString();
  const order = strNumber.padStart(2, '0');

  return (
    <Container>
      <Overlay />
      <Img alt={alt} src={img} />
      <Number>{order}</Number>
    </Container>
  );
};

export default TrailerCard;
