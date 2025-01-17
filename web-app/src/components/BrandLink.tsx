import { Brand } from '@/interfaces/brands';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface BrandLinkProps {
  brand: Brand;
  size: 'normal' | 'big';
}

export default function BrandLink({ brand, size }: BrandLinkProps) {
  const router = useRouter();
  return (
    <div className='flex items-center w-full mb-2 text-nowrap'>
      <Image
        src={brand.logo}
        alt={brand.name}
        height={500}
        width={500}
        loading='lazy'
        style={{ backgroundColor: 'white' }}
        // className='aspect-square h-4 w-4 md:h-8 md:w-8 rounded-full border cursor-pointer peer'
        className={`aspect-square ${size === 'normal' && 'h-4 w-4 md:h-8 md:w-8'} ${size === 'big' && 'h-8 w-8 md:h-16 md:w-16'} rounded-full border cursor-pointer peer`}
        onClick={() => router.push(`/${brand.handle}`)}
      />
      <p
        className={`${size === 'normal' && 'text-sm md:text-base px-2'} ${size === 'big' && 'text-base md:text-xl px-4'} truncate hover:underline cursor-pointer peer-hover:underline`}
        onClick={() => router.push(`/${brand.handle}`)}
      >
        {brand.name}
      </p>
    </div>
  );
}
