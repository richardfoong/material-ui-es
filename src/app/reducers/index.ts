import { combineReducers } from 'redux';
import { RootState, ServicesState } from './state';
import { servicesReducer } from './services';

export { RootState, ServicesState };

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
  services: servicesReducer as any,
});
