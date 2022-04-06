import React from 'react';
import { Link } from 'react-router-dom';
import { ARROW_LEFT } from '../../assets';

export const GoBack = ({ to }) => (
  <Link to={to}>
    <img alt='' src={ARROW_LEFT} />
  </Link>
);
