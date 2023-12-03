import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit';
import CardRecord from '../../models/CardRecord';

const cardActionUpdAll: ActionCreatorWithPayload<
  Array<CardRecord>,
  string
> = createAction<Array<CardRecord>, string>('ADD_All');

export default cardActionUpdAll;
