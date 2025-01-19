import { Close } from '@/svg';
import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  modalWidth?: number;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, modalWidth, className }) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        event.target instanceof HTMLElement &&
        event.target.classList.contains('custom-modal')
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } custom-modal fixed top-0 left-0 w-full h-full bg-[#0b0b0b4f] z-[9999]`}
    >
      <div
        style={{ width: modalWidth || 400 }}
        className={` ${className} max-[800px]:overflow-auto fixed max-[800px]:top-[57%] max-[800px]:h-[80%] max-[800px]:!w-[90%] top-[50%] translate-x-[-50%] translate-y-[-50%]  left-[50%] bg-white rounded-xl shadow-[0px_4px_6px_rgba(0, 0, 0, 0.1)]`}
      >
        <div className='bg-white absolute p-2 pt-4 right-[10px] cursor-pointer'>
        <Close
          onClick={onClose}
          className=" mb-0 !w-10 !h-10"
        />
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
