import { ReactNode } from 'react';

export interface ErrorBoundaryState {
  wasError: boolean;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export type ErrorStack = {
  componentStack: string;
};
