import DataContext from '../models/DataContext-model';
import { createContext, Context } from 'react';

const contextDataInit = new DataContext();
const ContextResponseData: Context<DataContext> =
  createContext<DataContext>(contextDataInit);

export default ContextResponseData;
