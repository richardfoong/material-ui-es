import { RootState } from './state';
import { handleActions } from 'redux-actions';
import { ServiceActions } from '@ap-actions/';
import { ServiceModel } from 'app/models';

const allServices = [{
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

export const initialState: RootState.ServicesState = {
  all: allServices,
  filtered: allServices
};

export const servicesReducer = handleActions<RootState.ServicesState, string>({
  [ServiceActions.Type.FILTER_SERVICE_SEARCH]: (state, action) => {
    console.log('state:', state);
    console.log('action:', action);
    if (action.payload) {
      const payload: string = action.payload;
      const filteredServices = state.all.filter((s: ServiceModel) => s.text.startsWith(payload));
      return {...state, filtered: filteredServices};
    }
    return {...state, filtered: state.all};
  }
},
  initialState);