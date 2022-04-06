import React from 'react';
import { Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import Section from '../Section';
import {
  Carousel,
  Container,
  PaginationWrapper,
  Title,
} from './styles';

import 'swiper/css';
import 'swiper/css/pagination';
import TrailerCard from '../TrailerCard';


const TrailerList = ({ trailers = [], isError }) => {
  const responsive = {
    320: {
      // when window width is >= 320px
      slidesPerView: 1,
    },
    480: {
      // when window width is >= 480px
      slidesPerView: 2,
    },
    850: {
      // when window width is >= 640px
      slidesPerView: 3,
    },
    1200: {
      // when window width is >= 1200px
      slidesPerView: 4,
    },
  };

  const sectionTitle = trailers.length > 1 ? 'Trailers' : 'Trailer';

  if (isError) {
    return (
      <Container>
        <Section>
          <Title>{sectionTitle}</Title>
          Oops! Something went wrong and this section
          was not load correctly. Please try again.
        </Section>
      </Container>
    );
  }

  return (
    <Container>
      <Section isError={isError}>
        <Title>{sectionTitle}</Title>
        <Carousel
          freeMode
          breakpoints={responsive}
          // loop='inifinte'
          modules={[Pagination]}
          pagination={{
            el: '.customPag',
            clickable: true,
          }}
          spaceBetween={10}
        >
          <PaginationWrapper className='customPag' />
          { trailers.map(({ _id, trailerImage }, index) => (
            <SwiperSlide key={_id}>
              <TrailerCard alt='' img={trailerImage} order={index + 1} />
            </SwiperSlide>
          ))}
        </Carousel>
      </Section>
    </Container>
  );
};

export default TrailerList;
