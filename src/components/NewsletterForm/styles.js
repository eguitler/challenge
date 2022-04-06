import styled from 'styled-components';
import { ARROW_RIGHT } from '../../assets';
import Button from '../Button';
import Input from '../Input';

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fonts.size.normal};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const Form = styled.form`
  margin-top: 1.5rem;
  height: 64px;
  width: 282px;
  position: relative;
`;

export const ButtonSquare = styled(Button)`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  padding: 0;
  position: absolute;
  right: .5rem;
  top: 50%;
  transform: translateY(-50%);

  &::after {
    content: '';
    background-image: url(${ARROW_RIGHT});
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  &:hover::after {
    filter: invert(77%) sepia(86%) saturate(447%) hue-rotate(341deg) brightness(105%) contrast(99%);
  }
`;

export const NewsletterInput = styled(Input)`
  padding-right: 65px;
`;
