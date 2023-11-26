import type { AppProps } from 'next/app';
import storeAppWrapper from '@/redux/redux-store/store';
import { useEffect, useState } from 'react';
import ErrorBoundary from '@/components/error-boundary/Error-Boundary';

function StartBeer({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default storeAppWrapper.withRedux(StartBeer);
