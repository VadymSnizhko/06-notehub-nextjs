import { ReactNode } from "react";
import css from './Modal.module.css'

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({
  isOpen,
  onClose,
  children,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={css.backdrop}>
    <div className={css.modal}>
      <button onClick={onClose}>
        Close
      </button>

      {children}
    </div>

    </div>
  );
};

export default Modal;