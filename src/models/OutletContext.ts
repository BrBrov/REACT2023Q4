import { ReactNode } from 'react';
import { RequestData } from '../utils/RequestData';

export default interface OutletContext {
  cards: Array<ReactNode> | null;
  fetchData: RequestData;
}
