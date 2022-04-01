import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './styles';

const HeroTitle = ({ children }) => (
  <Title>{children}</Title>
);

HeroTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default HeroTitle;
