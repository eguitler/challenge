import { useQuery } from 'react-query';
import { get } from './api';

const QUERY_KEY = ['movies'];

export function useMovie(id) {
  const URL = `movies/${id}`;
  return useQuery([...QUERY_KEY, id], () => get(URL));
}
