import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Section from '../Section';

export const FooterSection = styled(Section)`
  margin-top: 8rem;
  margin-bottom: 4rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 40% 60%;

  & > div:last-child {
    width: 100%
  }

  @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Brand = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.footer_title};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  margin-bottom: 2rem;
`;

export const Nav = styled.nav`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.mobile}) {
    margin-top: 6rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.mobile_sm}) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
      align-items: center;
    }

    @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.mobile_sm}) {
      gap: 1rem;
    }
  }
`;

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.fonts.size.normal};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const LinkNav = styled(Link)`
  font-size: ${({ theme }) => theme.fonts.size.normal};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  color: ${({ theme }) => theme.colors.text_secondary};
  width: fit-content;
  transition: color 200ms ease;

  :hover {
    color: yellow
  }
`;

export const Contact = styled.div`
  margin-top: 6rem;
  display: flex;
  gap: 2rem;
  font-size: ${({ theme }) => theme.fonts.size.small};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};

  & > span {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    justify-content: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.mobile}) {
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
`;
