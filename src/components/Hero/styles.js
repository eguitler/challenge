import styled from 'styled-components';
import Button from '../Button';
import Section from '../Section';

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const HeroSection = styled(Section)`
  padding-top: 9rem;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.size.hero_title};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.normal};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  width: 100%;
  max-width: 25rem;
  line-height: 32px;
  margin: 3rem 0;
`;

export const Information = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.normal};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  margin: 1rem 0;
`;

export const HeroButton = styled(Button)`
  margin: 2rem 0;
`;
