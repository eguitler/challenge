import React from 'react';
import { STAR, HALF_STAR } from '../../assets';
import {
  EmptyStar,
  FullStar,
  HalfStar,
} from './styles';

const RatingStar = ({ isHalf, isFull }) => {

  if (isFull) {
    return (
      <FullStar alt='rating star' src={STAR} />
    );
  }

  if (isHalf) {
    return (
      <HalfStar alt='rating star' src={HALF_STAR} />
    );
  }

  return (
    <EmptyStar alt='rating star' src={STAR} />
  );
};

export default RatingStar;
