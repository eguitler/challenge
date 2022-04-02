import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Description,
  HeroButton,
  Information,
  Title,
} from './styles';
import HeroImage from '../HeroImage';
import Rating from '../Rating';
import { durationMinToHours } from '../../utils/time';

/**
 * Hero used in Home and Movie pages
 */
const Hero = ({ movie }) => {

  const {
    _id: id,
    name,
    genre,
    duration: minutes,
    rating,
    coverImage,
  } = movie;

  const duration = durationMinToHours(minutes);

  return (
    <Container>
      <HeroImage alt={name} src={coverImage} />
      <Content>
        <Title>{name}</Title>
        <Rating value={rating} />
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.
        </Description>
        <Information>{`Genre: ${genre}`}</Information>
        <Information>{`Duration: ${duration}`}</Information>
        <Information>{`Rating: ${rating}`}</Information>
        <HeroButton>Watch Now</HeroButton>
      </Content>
    </Container>
  );
};

Hero.propTypes = {};

export default Hero;
