import { createAction } from 'redux-actions';


export namespace ServiceActions {
  export enum Type {
    FILTER_SERVICE_SEARCH = 'FILTER_SERVICE_SEARCH',
  };
  export const filterService = createAction(Type.FILTER_SERVICE_SEARCH);
};

export type ServiceActions = Omit<typeof ServiceActions, 'Type'>;
