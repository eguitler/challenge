import React from 'react';
import {
  Container,
  Image,
  Overlay,
} from './styles';

const HeroImage = ({ src, alt }) => (
  <Container>
    <Overlay />
    <Image alt={alt} src={src} />
  </Container>
);

export default HeroImage;
