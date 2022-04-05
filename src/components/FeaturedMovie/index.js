import React from 'react';
import { Link } from 'react-router-dom';
import { CLOCK, EYE } from '../../assets';
import { durationMinToHours } from '../../utils/time';
import { viewsToCompactFormat } from '../../utils/views';
import Button from '../Button';
import Overlay from '../Overlay';
import {
  Container,
  Img,
  Title,
  Information,
  InformationWrapper,
  Genre,
  ViewDetailsOverlay,
  FeaturedMovieOverlay,
} from './styles';

const FeaturedMovie = ({ data }) => {

  const {
    _id,
    name,
    genre,
    duration: minutes,
    rating,
    views: viewsRaw,
    coverImage,
    trailerImage,
  } = data;

  const views = viewsToCompactFormat(viewsRaw);
  const duration = durationMinToHours(minutes);

  return (
    <Container>
      <Link to={`/movie/${_id}`}>
        <FeaturedMovieOverlay />
        <Overlay degree={0} end={60} start={0} />
        <Img alt='' src={coverImage} />

        <InformationWrapper>
          <Information>
            <img alt='clock icon' src={CLOCK} />
            {duration}
          </Information>
          <Information>
            <img alt='eye icon' src={EYE} />
            {views}
          </Information>
          <Title>{name}</Title>
          <Genre forwardedAs='span' size='small'>
            {genre}
          </Genre>
        </InformationWrapper>
      </Link>
    </Container>
  );
};

export default FeaturedMovie;
