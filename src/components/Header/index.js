import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AVATAR, SEARCH } from '../../assets';
import Overlay from '../Overlay';
import {
  HeaderStyled,
  Brand,
  Nav,
  LinkStyled,
  HeaderSection,
  Search,
  User,
  Menu,
  Burger,
} from './styles';

const BG_COLOR = {
  dark: 'dark',
  transparent: 'transparent',
};

const Header = () => {

  const [bgColor, setBgColor] = useState(BG_COLOR.transparent);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  React.useEffect(() => {
    function scrollWatcher() {
      const { scrollY } = window;
      if (scrollY > 50) {
        setBgColor(BG_COLOR.dark);
      } else {
        setBgColor(BG_COLOR.transparent);
      }
    }

    window.addEventListener('scroll', scrollWatcher);
  }, []);

  React.useEffect(() => {
    function closeMenu(ev) {
      if (!menuRef.current.contains(ev.target)) {
        setIsOpen(false);
        window.removeEventListener('click', closeMenu);
      }
    }
    if (isOpen) window.addEventListener('click', closeMenu);
  }, [isOpen]);

  return (
    <HeaderStyled bgColor={bgColor}>
      <HeaderSection>
        <Brand to='/'>Paisaflix</Brand>
        <Burger size={30} onClick={toggleMenu} />
        <Menu ref={menuRef} isOpen={isOpen}>
          <Nav>
            <LinkStyled to='/about'>About</LinkStyled>
            <LinkStyled to='/contact'>Contact Us</LinkStyled>
            <LinkStyled to='/faq'>FAQ</LinkStyled>
            <LinkStyled to='/pricing'>Pricing</LinkStyled>
          </Nav>
          <Search>
            <img alt='search icon' src={SEARCH} />
          </Search>
          <User>
            <Link to='/profile'>
              <img alt='Soy Paisanx avatar' src={AVATAR} />
            </Link>
            <span>Soy Paisanx</span>
          </User>
        </Menu>
      </HeaderSection>
    </HeaderStyled>
  );
};

export default Header;
