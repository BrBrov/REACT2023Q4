import { Component } from 'react';

import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
  ErrorStack,
} from '../../models/Error-Boundary';
import ErrorPage from '../error-page/Error-Page';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public static readonly defaultProps: Readonly<ErrorBoundaryProps>;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { wasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { wasError: true };
  }

  componentDidCatch(error: Error, errInfo: ErrorStack): void {
    console.log("You caused this error: '" + error.name + "'!!!");
    console.log("Reason for error: '" + error.cause + "'!!!!");
    console.log('Error details:');
    console.log(errInfo.componentStack);
  }

  render() {
    if (this.state.wasError) {
      return <ErrorPage {...{ reloader: this.reloader.bind(this) }} />;
    }

    const { children } = this.props as unknown as ErrorBoundaryProps;

    return children;
  }
  private reloader(): void {
    this.setState({ wasError: false });
  }
}

export default ErrorBoundary;
