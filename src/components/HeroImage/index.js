import React from 'react';
import Overlay from '../Overlay';
import {
  Container,
  Image,
} from './styles';

const HeroImage = ({ src, alt }) => (
  <Container>
    <Overlay degree={90} end={50} start={2} />
    <Overlay degree={0} end={50} start={24} />
    <Image alt={alt} src={src} />
  </Container>
);

export default HeroImage;
