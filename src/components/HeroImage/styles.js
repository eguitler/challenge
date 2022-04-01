import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  position: absolute;
  right: 0;
  z-index: 10;
  height: 100%;
  `;

export const Overlay = styled.div`
  --bg: ${({ theme }) => theme.colors.contrast};
  --gradient: 90deg, var(--bg) 4%, rgba(255,255,255,0) 50%;

  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--bg);
  background: -moz-linear-gradient(var(--gradient));
  background: -webkit-linear-gradient(var(--gradient));
  background: linear-gradient(var(--gradient));
`;

export const Image = styled.img`
  height: 100%;
`;
