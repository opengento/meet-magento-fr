'use client';

import { createContext, useContext, ReactNode, useState } from 'react';
import Modal from '../components/Modal/Modal';
import Image from 'next/image';

interface ImageModalContextType {
  openImageModal: (src: string, alt: string) => void;
  closeModal: () => void;
}

const ImageModalContext = createContext<ImageModalContextType | undefined>(undefined);

export function ImageModalProvider({ children }: { children: ReactNode }) {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const openImageModal = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <ImageModalContext.Provider value={{ openImageModal, closeModal }}>
      {children}
      {modalImage && (
        <Modal 
          isOpen={!!modalImage} 
          onClose={closeModal}
          variant="center"
        >
          <div className="relative w-full h-full max-h-[80vh]">
            <Image
              src={modalImage.src}
              alt={modalImage.alt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </Modal>
      )}
    </ImageModalContext.Provider>
  );
}

export function useImageModal() {
  const context = useContext(ImageModalContext);
  if (context === undefined) {
    throw new Error('useImageModal must be used within a ImageModalProvider');
  }
  return context;
} 