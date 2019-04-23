import { RootState } from './state';
import { handleActions } from 'redux-actions';
import { ServiceModel } from 'app/models';

const initialState: RootState.ServicesState = [{
  id: 1,
  text: 'Sell stamps',
  icon: ''
}];

export const servicesReducer = handleActions<RootState.ServicesState, ServiceModel>({
  '': (state) =>  state
},
  initialState);