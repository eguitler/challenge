import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Description,
  HeroButton,
  HeroSection,
  Information,
  Title,
} from './styles';
import HeroImage from '../HeroImage';
import Rating from '../Rating';
import { durationMinToHours } from '../../utils/time';
import Section from '../Section';

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
      <HeroSection>
        <HeroImage alt={name} src={coverImage} />
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
      </HeroSection>
    </Container>
  );
};

Hero.propTypes = {};

export default Hero;
