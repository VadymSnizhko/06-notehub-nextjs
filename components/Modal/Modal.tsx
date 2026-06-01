import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import css from './Modal.module.css';

// Зауваження 0: Типізуємо через інтерфейс замість типу
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  
  // Зауваження 2 & 3: Обробка Escape та блокування скролу
  useEffect(() => {
    if (!isOpen) return;

    // Блокуємо скрол на body при відкритті
    document.body.style.overflow = 'hidden';

    // Функція для закриття по Escape
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Очищення ефектів (при закритті або розмонтуванні)
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Якщо модалка закрита — нічого не рендеримо
  if (!isOpen) return null;

  // Зауваження 4: Закриття при кліку на бекдроп (але не на саме вікно)
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // Перевірка для SSR (Next.js): портал працює тільки на клієнті
  if (typeof window === "undefined") return null;

  // Зауваження 1: Рендеримо через React Portal в document.body
  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button onClick={onClose} className={css.closeButton}>
          Close
        </button>
        {children}
      </div>
    </div>,
    document.body // Портал монтує модалку в кінець тегу <body>
  );
};

export default Modal;