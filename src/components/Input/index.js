import React from 'react';
import { InputStyled } from './styles';

const Input = ({
  id,
  type,
  name,
  value,
  onChange,
  placeholder,
  className,
}) => (
  <InputStyled
    className={className}
    id={id}
    name={name}
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={onChange}
  />
);

export default Input;
