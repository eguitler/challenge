import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import { Content } from './styles';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </>
  );
};

export default Layout;
