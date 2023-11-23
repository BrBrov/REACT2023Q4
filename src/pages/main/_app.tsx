import type { AppProps } from 'next/app';
import storeAppWrapper from '@/redux/redux-store/store';

function StartBeer({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default storeAppWrapper.withRedux(StartBeer);
