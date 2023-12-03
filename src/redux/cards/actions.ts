import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit';
import CardRecord from '../../models/CardRecord';

const cardAction: ActionCreatorWithPayload<CardRecord, string> = createAction<
  CardRecord,
  string
>('ADD_CARD');

export default cardAction;
