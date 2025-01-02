import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href={'/shop'}>Click to Shop</Link>
    </main>
  );
}
