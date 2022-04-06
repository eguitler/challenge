import React from 'react';
import {
  Featured,
  Hero,
  TrailerList,
} from '../../components';
import LoadingOverlay from '../../components/LoadingOverlay';
import {
  useHero,
  useMovies,
  useTrailers,
} from '../../services';

const Home = () => {

  const {
    data: hero,
    isError: heroError,
    isLoading: heroLoading,
  } = useHero();

  const {
    data: trailers,
    isError: trailersError,
    isLoading: trailersLoading,
  } = useTrailers();

  const {
    data: movies,
    isError: moviesError,
    isLoading: moviesLoading,
  } = useMovies();

  if (
    heroLoading
    || trailersLoading
    || moviesLoading
  ) return <LoadingOverlay />;

  return (
    <>
      <Hero isError={heroError} movie={hero} />
      <TrailerList isError={trailersError} trailers={trailers} />
      <Featured isError={moviesError} movies={movies} />
    </>
  );
};

export default Home;
