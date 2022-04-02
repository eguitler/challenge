import React from 'react';
import { ButtonStyled } from './styles';

const Button = ({
  name,
  variant = 'primary',
  size = 'large',
  shape = 'oval',
  onClick,
  className,
  children,
}) => {
  console.log('asd');
  return (
    <ButtonStyled
      className={className}
      name={name}
      shape={shape}
      size={size}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
