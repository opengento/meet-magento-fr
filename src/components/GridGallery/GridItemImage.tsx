'use client';

import Image from 'next/image';
import { useState } from 'react';
import Modal from '../Modal/Modal';

interface GridItemImageProps {
  src: string;
  alt: string;
  format?: 'portrait' | 'landscape' | 'square' | 'big-square' | 'auto';
}

const GridItemImage = ({ src, alt, format = 'auto' }: GridItemImageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className={`grid-item grid-item-image group relative overflow-hidden ${format !== 'auto' ? format : ''} cursor-pointer`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="w-full h-full">
          <Image 
            src={src} 
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority={false}
          />
        </div>

        <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        variant="center"
      >
        <div className="relative w-full h-full max-h-[80vh]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </Modal>
      </div>
    </>
  );
}

export default GridItemImage;