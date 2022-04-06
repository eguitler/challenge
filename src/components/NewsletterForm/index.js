import React, { useRef, useState } from 'react';
import Button from '../Button';
import Modal from '../Modal';
import {
  ButtonSquare,
  Form,
  Label,
  NewsletterInput,
} from './styles';

const NewsletterForm = () => {

  const [email, setEmail] = useState('');
  const modalRef = useRef();

  const handleChange = (ev) => {
    const { value } = ev.target;
    setEmail(value);
  };

  const closeModal = () => {
    modalRef.current.close();
    setEmail('');
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (!email) return;
    modalRef.current.open();
  };

  return (
    <>
      <Label htmlFor='email'>Join Newsletters</Label>
      <Form onSubmit={handleSubmit}>
        <NewsletterInput
          id='email'
          placeholder='Insert your mail here'
          type='email'
          value={email}
          onChange={handleChange}
        />
        <ButtonSquare />
      </Form>

      <Modal ref={modalRef}>
        {`Thanks for suscribing! \nWe sent you an email to: \n${email}`}
        <Button
          size='medium'
          onClick={closeModal}
        >
          Accept
        </Button>
      </Modal>
    </>
  );
};

export default NewsletterForm;
