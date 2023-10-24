import { ReactNode } from 'react';

export type BeerProps = Record<string, never>;
export interface BeerState {
  cards: Array<ReactNode> | null;
}
