import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Container = styled.div`
    overflow-x: hidden;
    min-height: 10rem;
`;

export const Title = styled.h2(
  ({ theme }) => ({
    'font-size': theme.fonts.size.huge,
    'margin-bottom': '1rem',
  }),
);

export const Carousel = styled(Swiper)`
  display: flex;
  justify-content: space-between;
  position: relative;
  overflow: visible;
  clip-path: inset(-2rem -100rem 0 -1.7rem);
`;

export const PaginationWrapper = styled.div`
    display: flex;
    position: absolute;
    bottom: 105% !important;
    right: 0;
    left: unset !important;
    width: fit-content !important;

    .swiper-pagination-bullet {
      width: 1rem;
      height: .5rem;
      border-radius: 2px;
      margin-left: 5px;
      margin-right: 0;
      background-color: ${({ theme }) => theme.colors.secondary};
      opacity: .5;
      cursor: pointer;
    }
    
    .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.colors.primary};
      opacity: 1;
    }
`;

