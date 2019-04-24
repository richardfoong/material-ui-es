import { createAction } from 'redux-actions';

export enum Type {
  FILTER_SERVICE_SEARCH = 'FILTER_SERVICE_SEARCH',
};

export namespace ServiceActions {
  export const filterService = createAction(Type.FILTER_SERVICE_SEARCH);
};

export type ServiceActions = typeof ServiceActions;
