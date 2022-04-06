import styled from 'styled-components';
import Section from '../Section';

export const FeaturedSection = styled(Section)`
  margin-top: 3rem;
  margin-bottom: 4rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.section_title};

  @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fonts.size.huge};
  }
`;

export const ViewMore = styled.a`
  font-size: ${({ theme }) => theme.fonts.size.large};
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fonts.size.normal};
  }
`;

export const MoviesGrid = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
  gap: 1rem;
  flex-flow: wrap;
`;

