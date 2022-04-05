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

export const Title = styled.h2(
  ({ theme }) => ({
    'font-size': theme.fonts.size.section_title,
  }),
);

export const ViewMore = styled.a(
  ({ theme }) => ({
    'font-size': theme.fonts.size.large,
    color: theme.colors.primary,
  }),
);

export const MoviesGrid = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
  gap: 1rem;
  flex-flow: wrap;
`;

