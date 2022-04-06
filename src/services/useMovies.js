import { useQuery } from 'react-query';
import { get } from './api';

const QUERY_KEY = ['movies'];

export function useMovies() {
  const URL = 'movies';
  return useQuery(QUERY_KEY, () => get(URL));
}
