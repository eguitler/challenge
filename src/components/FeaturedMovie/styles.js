import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import Overlay from '../Overlay';

export const Container = styled.article`
  flex-grow: 1;
  position: relative;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
`;

export const InformationWrapper = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 1.5rem;
  z-index: 2;
`;

export const Information = styled.div`
  gap: .5rem;
  display: inline-flex;
  height: max-content;
  margin-right: 2rem;
  font-size: ${({ theme }) => theme.fonts.size.small};
  color: ${({ theme }) => theme.colors.text_in_field};

  @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.mobile_sm}) {
    display: flex;
    margin-bottom: .5rem;
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.card_title};
  margin-bottom: .5rem;

  @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.mobile_sm}) {
    font-size: ${({ theme }) => theme.fonts.size.huge};
  }
`;

export const Genre = styled(Button)`
  :hover {
    background-color: ${(prop) => prop.theme.colors.primary};
    color: ${(prop) => prop.theme.colors.text_contrast};
  }
`;

export const FeaturedMovieOverlay = styled(Overlay)`
  z-index: 3;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,.4);
    opacity: 0;
    transition: all 200ms ease;
  }

  &:hover::after {
      opacity: 1;
  }
`;
