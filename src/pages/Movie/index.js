import React from 'react';
import { useParams } from 'react-router-dom';
import { Hero, TrailerList } from '../../components';
import LoadingOverlay from '../../components/LoadingOverlay';
import { useMovie } from '../../services';

const Movie = () => {

  const { id } = useParams();

  const {
    data: movie,
    isError: movieError,
    isLoading: movieLoading,
  } = useMovie(id);

  if (movieLoading) return <LoadingOverlay />;

  const trailer = [{
    _id: movie._id,
    trailerImage: movie.trailerImage,
  }];

  return (
    <>
      <Hero goBack='/' isError={movieError} movie={movie} />
      <TrailerList isError={movieError} trailers={trailer} />
    </>
  );
};

export default Movie;
