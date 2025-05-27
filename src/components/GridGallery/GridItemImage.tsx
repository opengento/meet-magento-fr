'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useImageModal } from '@/contexts/ImageModalContext';

interface GridItemImageProps {
  src: string;
  alt: string;
  format?: 'portrait' | 'landscape' | 'square' | 'big-square' | 'auto';
}

const GridItemImage = ({ src, alt, format = 'auto' }: GridItemImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { openImageModal } = useImageModal();

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div 
      className={`grid-item grid-item-image group relative overflow-hidden ${format !== 'auto' ? format : ''} cursor-pointer`}
      onClick={() => openImageModal(src, alt)}
    >
      <div className="w-full h-full">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <Image 
          src={src} 
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-transform duration-500 group-hover:scale-110 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          priority={false}
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
}

export default GridItemImage;