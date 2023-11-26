import { Component, ReactNode } from 'react';

import ErrorPage from '../error-page/Error-Page';

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(
    props: { children: ReactNode } | Readonly<{ children: ReactNode }>
  ) {
    super(props);

    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error) {
    console.log("You caused this error: '" + error.cause + "'!!!");
    console.log("Reason for error: '" + error.message + "'!!!!");
  }
  render(): ReactNode {
    if (this.state.hasError) {
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
