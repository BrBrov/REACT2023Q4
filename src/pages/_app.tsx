import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

export default function StartApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
