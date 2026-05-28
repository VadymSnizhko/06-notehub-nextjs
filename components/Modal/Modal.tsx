import { ReactNode } from "react";

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
    <div>
      <button onClick={onClose}>
        Close
      </button>

      {children}
    </div>
  );
};

export default Modal;