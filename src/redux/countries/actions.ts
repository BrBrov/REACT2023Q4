import {
  ActionCreatorWithoutPayload,
  createAction,
  PayloadActionCreator,
} from '@reduxjs/toolkit';

const countryAction: PayloadActionCreator<ActionCreatorWithoutPayload> =
  createAction('country');

export default countryAction;
