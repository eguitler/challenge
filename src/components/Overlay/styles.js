import styled from 'styled-components';

export const OverlayStyled = styled.div`
  --bg: ${({ theme }) => theme.colors.contrast};
  --degree: ${({ degree }) => `${degree}deg`};
  --start: ${({ start }) => `${start}%`};
  --end: ${({ end }) => `${end}%`};
  
  --gradient: var(--degree), var(--bg) var(--start), rgba(255,255,255,0) var(--end);
  /* --gradient: 90deg, var(--bg) -2%, rgba(255,255,255,0) 60%; */

  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;

  background: -moz-linear-gradient(var(--gradient));
  background: -webkit-linear-gradient(var(--gradient));
  background: linear-gradient(var(--gradient));
  opacity: 1;
`;
