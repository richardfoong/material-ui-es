import { RootState } from './state';
import { handleActions } from 'redux-actions';
import { ServiceModel } from 'app/models';

export const initialState: RootState.ServicesState = [{
  id: 1,
  text: 'Sell stamps',
  icon: ''
}, {
  id: 2,
  text: 'Article tracking',
  icon: '',
}, {
  id: 3,
  text: 'Product sale',
  icon: '',
}, {
  id: 4,
  text: 'Billpay',
  icon: '',
}, {
  id: 5,
  text: 'Police check',
  icon: '',
}, {
  id: 6,
  text: 'Postage access',
  icon: '',
}, {
  id: 7,
  text: 'Customer search',
  icon: '',
}, {
  id: 8,
  text: 'Help',
  icon: '',
}];

export const servicesReducer = handleActions<RootState.ServicesState, ServiceModel>({
  'a': (state) => {
    return state
  }
},
  initialState);