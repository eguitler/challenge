import React from 'react';
import { SectionStyled } from './styles';

const Section = ({
  children,
  mTop,
  mBottom,
  className,
}) => (
  <SectionStyled className={className} mBottom={mBottom} mTop={mTop}>
    {children}
  </SectionStyled>
);

export default Section;
