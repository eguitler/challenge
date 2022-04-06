import React from 'react';
import { ENVELOP, LOCATION, PHONE } from '../../assets';
import NewsletterForm from '../NewsletterForm';
import {
  Brand,
  FooterSection,
  LinkNav,
  Nav,
  Title,
  Contact,
} from './styles';


const Footer = () => (
  <FooterSection forwardedAs='footer'>
    <div>
      <Brand>Paisaflix</Brand>
      <NewsletterForm />
    </div>

    <div>
      <Nav>
        <div>
          <Title>Product</Title>
          <LinkNav to='/movies'>Movies</LinkNav>
          <LinkNav to='/tvshow'>TV Show</LinkNav>
          <LinkNav to='/videos'>Videos</LinkNav>
        </div>
        <div>
          <Title>Media Group</Title>
          <LinkNav to='/nicestudios'>Nice Studio</LinkNav>
          <LinkNav to='/nicenews'>Nice News</LinkNav>
          <LinkNav to='/nicetv'>Nice TV</LinkNav>
        </div>
        <div>
          <Title>Sitemap</Title>
          <LinkNav to='/about'>About</LinkNav>
          <LinkNav to='/careers'>Careers</LinkNav>
          <LinkNav to='/press'>Press</LinkNav>
        </div>
      </Nav>
      <Contact>
        <span>
          <img alt='' src={LOCATION} />
          8819 Enrique Martinez, Bs As., 90280
        </span>
        <span>
          <img alt='' src={ENVELOP} />
          hola@paisanos.io
        </span>
        <span>
          <img alt='' src={PHONE} />
          +271 386-647-3637
        </span>
      </Contact>
    </div>
  </FooterSection>
);

export default Footer;
