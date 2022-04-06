import React from 'react';
import FeaturedMovie from '../FeaturedMovie';
import {
  Title,
  ViewMore,
  TextWrapper,
  MoviesGrid,
  FeaturedSection,
} from './styles';

const Featured = ({ movies = [], isError }) => {


  if (isError) {
    return (
      <FeaturedSection>
        <Title>Featured</Title>
        Oops! Something went wrong and this section
        was not load correctly. Please try again.
      </FeaturedSection>
    );
  }

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
