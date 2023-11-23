import type { AppProps } from 'next/app';

export default function Beer({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
