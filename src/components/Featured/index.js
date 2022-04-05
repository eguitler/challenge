import React from 'react';
import FeaturedMovie from '../FeaturedMovie';
import {
  Title,
  ViewMore,
  TextWrapper,
  MoviesGrid,
  FeaturedSection,
} from './styles';

const INPUT_STYLES = {

};

const Featured = ({ movies = [] }) => {
  console.log('asdasd');
  return (
    <FeaturedSection>
      <TextWrapper>
        <Title>Featured</Title>
        <ViewMore href='#'>View More</ViewMore>
      </TextWrapper>
      <MoviesGrid>
        {movies.map((movie) => (
          <FeaturedMovie key={movie._id} data={movie} />
        ))}
      </MoviesGrid>
    </FeaturedSection>
  );
};

export default Featured;
