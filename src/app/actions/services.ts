import { createAction } from 'redux-actions';


export enum Type {
  FILTER_SERVICE_SEARCH = 'FILTER_SERVICE_SEARCH',
  ADD_SERVICE_ON_SEARCH = 'ADD_SERVICE_ON_SEARCH',
  REMOVE_SERVICE_FROM_SEARCH = 'REMOVE_SERVICE_FROM_SEARCH',
  SET_SERVICES_FOR_SEARCH = 'SET_SERVICES_FOR_SEARCH',
};
export const filterService = createAction(Type.FILTER_SERVICE_SEARCH);
export const addServiceOnSearch = createAction(Type.ADD_SERVICE_ON_SEARCH);
export const removeServiceFromSearch = createAction(Type.REMOVE_SERVICE_FROM_SEARCH);
export const setServicesForSearch = createAction(Type.SET_SERVICES_FOR_SEARCH);

export const ServiceActions = {
  filterService,
  addServiceOnSearch,
  removeServiceFromSearch,
  setServicesForSearch,
}
