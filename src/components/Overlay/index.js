import React from 'react';
import { OverlayStyled } from './styles';

const Overlay = ({
  className,
  degree,
  start,
  end,
}) => (
  <OverlayStyled
    className={className}
    degree={degree}
    end={end}
    start={start}
  />
);

export default Overlay;
