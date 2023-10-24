import { ReactNode } from 'react';

export interface MainProps {
  cards: Array<ReactNode> | null;
}

export type MainState = Record<string, never>;
