// import { useEffect } from "react";

import { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

/**
 * Use to show consistent modal when needed. Resposive for web and mobile.
 */
export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [modalAnimation, setModalAnimation] = useState('');
  const [modalBgAnimation, setModalBgAnimation] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setModalAnimation('modal-slide-in');
      setModalBgAnimation('modal-fade-in');
    } else {
      setModalAnimation('modal-slide-out');
      setModalBgAnimation('modal-fade-out');
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) {
    return null;
  }

  // if (!isOpen) {
  //   return null;
  // }

  return (
    <dialog
      aria-modal={true}
      className={`flex items-center justify-end md:justify-center w-full h-full fixed inset-0 z-50 bg-black bg-opacity-50 ${modalBgAnimation}`}
      // className='flex items-center justify-center w-full h-full fixed inset-0 z-50 bg-black bg-opacity-50'
      onClick={onClose}
    >
      <div
        className={`bg-primary rounded-l-lg md:rounded-lg p-4 w-3/4 md:w-auto h-full md:h-3/4 max-h-full flex flex-col ${modalAnimation}`}
        // className='bg-white rounded-lg p-4 w-full h-full md:h-auto md:w-auto max-h-full overflow-y-auto'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-end'>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700'
            aria-label='Close Modal'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <div className='flex-grow m-2 overflow-y-scroll text-secondary'>{children}</div>
      </div>
    </dialog>
  );
}
