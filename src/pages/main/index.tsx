import Head from 'next/head';
import mpage from '@/styles/MainPage.module.scss';
import { useRouter } from 'next/router';

export default function MainPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={mpage.block}>
        <span className={mpage.text}>Main Path</span>
      </div>
    </>
  );
}
