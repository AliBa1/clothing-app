import {
  mdiChevronLeft,
  mdiChevronRight,
  mdiCircle,
  mdiCircleOutline
} from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface CarouselProps {
  images: string[];
  alt?: string;
  sizeDivisor?: number;
}

export default function ImageCarousel({
  images,
  alt,
  sizeDivisor = 1
}: CarouselProps) {
  const [imgIndex, setImgIndex] = useState<number>(0);
  useEffect(() => {
    setImgIndex(0);
  }, [images]);

  return (
    <div className='flex flex-col pb-4'>
      {
        <Image
          src={images[imgIndex] || '/gray-img.jpg'}
          alt={alt || 'Loading Product'}
          height={1280 / sizeDivisor}
          width={1024 / sizeDivisor}
          style={{ backgroundColor: 'white' }}
          className={`aspect-[4/5] rounded object-contain object-center mx-auto ${
            !images[imgIndex] && 'object-fill'
          }`}
          priority
        />
      }

      <div className='flex justify-between mt-2'>
        <div className='flex gap-2'>
          <button
            className='btn-circle'
            onClick={() => setImgIndex(imgIndex - 1)}
            disabled={imgIndex === 0}
          >
            <Icon path={mdiChevronLeft} size={1.5} />
          </button>
          <button
            className='btn-circle'
            onClick={() => setImgIndex(imgIndex + 1)}
            disabled={imgIndex === images.length - 1}
          >
            <Icon path={mdiChevronRight} size={1.5} />
          </button>
        </div>
        <div>
          {images.map((_, index) => (
            <button key={index} onClick={() => setImgIndex(index)}>
              <Icon
                path={index === imgIndex ? mdiCircle : mdiCircleOutline}
                size={1.5}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
