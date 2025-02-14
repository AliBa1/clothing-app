import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='w-full flex border-t border-primary justify-between items-center px-4 text-sm md:text-base min-h-16 mt-24'>
      <Image
        src={'/logos/flea-temp-logo.png'}
        alt='Flea Logo'
        width={100}
        height={100}
        className='hidden md:block'
      />
      <div className='flex gap-4 md:gap-8'>
        <p>About</p>
        <p>Contact</p>
        <p>FAQ</p>
        <p>Legal</p>
      </div>
      <p className='font-header'>©{new Date().getFullYear()} Flea</p>
    </footer>
  );
}
