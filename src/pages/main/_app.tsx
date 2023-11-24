import type { AppProps } from 'next/app';
import storeAppWrapper from '@/redux/redux-store/store';
import { useEffect, useState } from 'react';

function StartBeer({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return <Component {...pageProps} />;
}

export default storeAppWrapper.withRedux(StartBeer);
