import React from 'react';
import { durationMinToHours } from '../../utils/time';
import { GoBack } from '../GoBack';
import HeroImage from '../HeroImage';
import Rating from '../Rating';
import {
  Container,
  Description,
  HeroButton,
  HeroSection,
  Information,
  Title,
} from './styles';

/**
 * Hero used in Home and Movie pages
 */
const Hero = ({ movie = {}, isError, goBack = '' }) => {

  const {
    name,
    genre,
    duration: minutes,
    rating,
    coverImage,
  } = movie;

  const duration = durationMinToHours(minutes);

  if (isError) {
    return (
      <Container>
        <HeroSection>
          <Title>First recommendation</Title>
          Oops! Something went wrong and this section
          was not load correctly. Please try again.
        </HeroSection>
      </Container>
    );
  }

  return (
    <Container>
      <HeroSection>
        {goBack && <GoBack to={goBack} />}
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
