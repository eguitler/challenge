/* eslint-disable react/jsx-key */
import React from 'react';
import RatingStar from '../RatingStar';
import { Container } from './styles';

const Rating = ({ value = 3.5, limit = 5 }) => {

  let checkedValue = value > limit ? limit : value;
  checkedValue = value < 0 ? 0 : checkedValue;

  const integer = Math.floor(checkedValue);
  const decimal = checkedValue - integer;
  const isHalf = decimal >= 0.5;
  const empty = isHalf
    ? limit - integer - 1
    : limit - integer;

  return (
    <Container>
      {Array(integer).fill(null).map(
        () => <RatingStar isFull />,
      )}

      {isHalf && <RatingStar isHalf />}

      {Array(empty).fill(null).map(
        () => <RatingStar />,
      )}
    </Container>
  );
};

export default Rating;
