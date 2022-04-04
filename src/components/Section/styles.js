import styled from 'styled-components';

export const SectionStyled = styled.section(
  ({ theme, mTop, mBottom }) => ({
    margin: '0 auto',
    'margin-top': mTop,
    'margin-bottom': mBottom,
    // border: '1px solid #333',
    width: '80%',
    padding: '0 2rem',
  }),
);

