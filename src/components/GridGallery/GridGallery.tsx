'use client';

import GridItemImage from "./GridItemImage";

const GridGallery = ({ images }: { images: { src: string; alt: string; format: string }[] }) => {
  return (
    <div className="grid-gallery grid grid-cols-[repeat(auto-fit,minmax(12.5rem,1fr))] auto-rows-[12.5rem] grid-flow-dense gap-4">
      {images.map((image) => (
        <GridItemImage 
          key={image.src} 
          src={image.src} 
          alt={image.alt}
          format={image.format as "portrait" | "landscape" | "square" | "big-square" | "auto"}
        />
      ))}
    </div>
  );
}

export default GridGallery;
