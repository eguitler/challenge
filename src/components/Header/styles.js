import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import Section from '../Section';

export const HeaderStyled = styled.header`
  /* border: 1px solid white; */
  position: sticky;
  top: 0;
  width: 100%;
  height: ${({ theme }) => theme.layout.header_height};
  z-index: 10;
  transition: all 300ms ease;
  background-color: ${({ bgColor }) => (bgColor === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0)')};
`;

export const HeaderSection = styled(Section)`
  height: 100%;
  display: flex;
  position: relative;
`;

export const Brand = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 5rem;

  font-size: ${({ theme }) => theme.fonts.size.huge};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const Burger = styled(GiHamburgerMenu)`
  display: none;
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.laptop_sm}) {
    display: block;
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Menu = styled.nav`
  display: grid;
  grid-template-columns: max-content auto max-content;
  width: 100%;
  transition: transform 300ms ease;

  @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.laptop_sm}) {
    position: fixed;
    max-width: 350px;
    width: 80vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    left: 0;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    background-color: rgba(0,0,0,1);
    padding: 3rem 2rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.laptop_sm}) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

export const LinkStyled = styled(Link)`
  font-size: ${({ theme }) => theme.fonts.size.normal};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  padding: .2rem;
  
  ::after {
    content: '';
    display: block;
    background-color: yellow;
    transition: all 200ms ease;
    border-radius: 5px;

    opacity: .6;
    height: 0;
    width: 0;
    margin: 0 auto;
  }
  
  :hover::after {
    opacity: 1;
    height: 3px;
    width: 100%;
    margin-top: .5rem;
  }
`;

export const Search = styled.div`
  /* border: 1px solid white; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.laptop_sm}) {
    padding: 1rem 1rem;
    margin-bottom: 2rem;
  }
`;

export const User = styled.div`
  /* border: 1px solid white; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  
  @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.laptop_sm}) {
    flex-direction: row-reverse;
    justify-content: flex-start;
    /* border: 1px solid; */
  }
`;
