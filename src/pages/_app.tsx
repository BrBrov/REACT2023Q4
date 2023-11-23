import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import storeAppWrapper from '@/redux/redux-store/store';

function StartApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default storeAppWrapper.withRedux(StartApp);
