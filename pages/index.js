import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>alpha</title>
      </Head>
      <section className="bg-pink-600 text-white min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-serif font-bold lowercase tracking-tight">alpha</h1>
        <p className="text-lg mt-2">bold voices. brilliant minds. breaking barriers.</p>
        <Link href="/about" className="mt-6 inline-block bg-white text-pink-600 font-bold px-6 py-2 rounded shadow">
          ABOUT ALPHA
        </Link>
      </section>
      <section className="text-center py-20">
        <h2 className="text-xl font-bold">latest episode</h2>
        <p className="text-gray-600 mt-2">Coming soon. Launching Summer 2025.</p>
      </section>
    </>
  );
}