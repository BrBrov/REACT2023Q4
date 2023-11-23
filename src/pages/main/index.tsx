import Head from 'next/head';
import Beer from '@/components/beer/Beer';

export default function MainPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="beer">
        <Beer />
      </div>
    </>
  );
}
