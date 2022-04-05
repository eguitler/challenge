import styled from 'styled-components';
import { PLAY } from '../../assets';
import Overlay from '../Overlay';

export const Container = styled.article`
  width: 100%;
  height: min-content;
  position: relative;
  cursor: pointer;
  margin-bottom: 2rem;
  display: grid;
`;

export const Img = styled.img`
  width: 100%;
`;

export const CardOverlay = styled(Overlay)`
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,.5);
    background-image: url(${PLAY});
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0;
    transition: all 200ms ease;
  }

  &:hover::after {
      opacity: 1;
  }
`;

export const Number = styled.article`
  position: absolute;
  z-index: 1;
  top: 84%;
  right: 1rem;
  font-size: ${({ theme }) => theme.fonts.size.huge};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: white;
`;
