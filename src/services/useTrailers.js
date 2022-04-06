import { useQuery } from 'react-query';
import { get } from './api';

const QUERY_KEY = ['trailers'];


export function useTrailers() {
  const URL = 'trailers';
  return useQuery(QUERY_KEY, () => get(URL));
}
