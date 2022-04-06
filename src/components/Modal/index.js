import {
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import {
  Container,
  Background,
  Card,
} from './styles';

const Modal = (
  {
    children,
    closeBgClick = false,
  },
  ref,
) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRoot = document.getElementById('root-modal');

  const handleBgClick = () => {
    if (!closeBgClick) return;
    setIsOpen(false);
  };

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  if (!isOpen) return null;

  const modal = (
    <Container>
      <Background aria-hidden onClick={handleBgClick} />
      <Card>
        <div>
          {children}
        </div>
      </Card>
    </Container>
  );

  return createPortal(modal, modalRoot);
};

export default forwardRef(Modal);
