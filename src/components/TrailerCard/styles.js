import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  position: relative;
  margin-bottom: 2rem;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Overlay = styled.article`
  --bg: ${({ theme }) => theme.colors.contrast};
  --bottom_gradient: 0deg, var(--bg) 0%, rgba(255,255,255,0) 50%;

  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  opacity: .8;

  background: -moz-linear-gradient(var(--bottom_gradient));
  background: -webkit-linear-gradient(var(--bottom_gradient));
  background: linear-gradient(var(--bottom_gradient));
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
