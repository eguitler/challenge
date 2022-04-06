import React from 'react';
import { Link } from 'react-router-dom';
import { NOT_FOUND } from '../../assets';
import Button from '../../components/Button';
import { Logo, Message, NotFoundSection } from './styles';

const NotFound = () => (
  <NotFoundSection>
    <Logo alt='' src={NOT_FOUND} />
    <Message>
      {'Page not found \nSorry! We could not find the URL requested.'}
    </Message>
    <Link to='/'>
      <Button size='medium' variant='secondary'>
        Go back home
      </Button>
    </Link>
  </NotFoundSection>
);

export default NotFound;
