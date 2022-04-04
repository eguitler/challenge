import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  max-width: 60rem;
`;

export const Overlay = styled.div`
  --bg: ${({ theme }) => theme.colors.contrast};
  --left_gradient: 90deg, var(--bg) 2%, rgba(255,255,255,0) 50%;
  --bottom_gradient: 0deg, var(--bg) 24%, rgba(255,255,255,0) 50%;

  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--bg);
  background: -moz-linear-gradient(var(--left_gradient)),
              -moz-linear-gradient(var(--bottom_gradient));

  background: -webkit-linear-gradient(var(--left_gradient)),
              -webkit-linear-gradient(var(--bottom_gradient));

  background: linear-gradient(var(--left_gradient)),
              linear-gradient(var(--bottom_gradient));
`;

export const Image = styled.img`
  width: 100%;
`;
