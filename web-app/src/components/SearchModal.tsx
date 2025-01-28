// import { useEffect } from "react";

import { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Use to show consistent modal when needed. Resposive for web and mobile.
 */
export default function SearchModal({ isOpen, onClose }: ModalProps) {
  const [isVisible, setIsVisible] = useState<boolean>(isOpen);
  const [modalAnimation, setModalAnimation] = useState<string>('');
  const [modalBgAnimation, setModalBgAnimation] = useState<string>('');

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
      setModalAnimation('search-slide-in');
      setModalBgAnimation('search-fade-in');
    } else {
      setModalAnimation('search-slide-out');
      setModalBgAnimation('search-fade-out');
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) {
    return null;
  }

  return (
    <dialog
      aria-modal={true}
      className={`flex items-start justify-end md:justify-center w-full h-full fixed inset-0 z-50 bg-black bg-opacity-50 ${modalBgAnimation}`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg md:rounded-lg w-full md:w-3/4 h-full md:h-auto max-h-full p-2 md:p-0 mt-0 md:mt-8 flex flex-col ${modalAnimation}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-end'>
          <input
            id='search'
            name='search'
            type='text'
            placeholder='Search...'
            className='w-full p-4 text-xl md:rounded-lg border-b md:border-none border-black focus:outline-none'
          />
          <button
            onClick={onClose}
            className='text-gray-600 hover:text-gray-800 px-4'
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
      </div>
    </dialog>
  );
}
