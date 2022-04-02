import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  /* border: 3px solid red; */
`;

export const Content = styled.article`
  width: fit-content;
  /* border: 3px solid yellow; */
  margin: 12rem ${({ theme }) => theme.layout.margin_sides};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.size.hero_title};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.normal};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  width: 25rem;
  line-height: 32px;
  margin: 3rem 0;
  `;

export const Information = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.normal};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  margin: 1rem 0;
`;

export const HeroButton = styled(Button)`
  // font-size: ${({ theme }) => theme.fonts.size.normal};
  /* font-weight: ${({ theme }) => theme.fonts.weight.medium}; */
  margin: 2rem 0;

`;
