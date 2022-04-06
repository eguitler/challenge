import { useQuery } from 'react-query';
import { get } from './api';

const QUERY_KEY = ['hero'];

export function useHero() {
  const URL = 'hero';
  return useQuery(QUERY_KEY, () => get(URL));
}
