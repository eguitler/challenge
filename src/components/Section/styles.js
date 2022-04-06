import styled from 'styled-components';

export const SectionStyled = styled.section`
  margin: 0 auto;
  margin-top: ${({ mTop }) => mTop};
  margin-bottom: ${({ mBottom }) => mBottom};
  width: 80%;
  padding: 0 2rem;

  @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.tablet_sm}) {
    width: 100%;
  }
`;
