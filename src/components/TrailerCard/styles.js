import styled from 'styled-components';
import { PLAY } from '../../assets';

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

export const Overlay = styled.div`
  --bg: ${({ theme }) => theme.colors.contrast};
  --bottom_gradient: 0deg, var(--bg) -2%, rgba(255,255,255,0) 60%;

  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;

  background: -moz-linear-gradient(var(--bottom_gradient));
  background: -webkit-linear-gradient(var(--bottom_gradient));
  background: linear-gradient(var(--bottom_gradient));
  opacity: 1;

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

  :hover::after {
      opacity: 1;
  }
`;

export const Number = styled.article`
  position: absolute;
  z-index: 1;
  top: 84%;
  right: 1rem;
  font-size: 32px;
  font-weight: bold;
  color: white;
`;
