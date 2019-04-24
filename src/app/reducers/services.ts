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
  filtered: allServices,
  searched: []
};

export const servicesReducer = handleActions<RootState.ServicesState, any>({
  [ServiceActions.Type.FILTER_SERVICE_SEARCH]: (state, { payload = '' }) => {
    const { searched} = state;
    if (payload) {
      const filteredServices = state.all.filter((s: ServiceModel) => s.text.toLowerCase().includes(payload.toLowerCase()))
        .filter((s: ServiceModel) => !searched.find(service => s.id === service.id));
      return { ...state, filtered: filteredServices };
    }
    return { ...state, filtered: state.all.filter(s => !searched.find(service => service.id === s.id)) };
  },
  [ServiceActions.Type.ADD_SERVICE_ON_SEARCH]: (state, action) => {
    if (action.payload) {
      const searched = state.all.find((s: ServiceModel) => (s.text.toLowerCase().includes(action.payload.toLowerCase())));
      if (searched) {
        state.searched.push(searched);
      }
    }
    return { ...state };
  },
  [ServiceActions.Type.REMOVE_SERVICE_FROM_SEARCH]: (state, action) => {
    if (action.payload) {
      state.searched = state.searched.filter(s => s.id !== action.payload);
    }
    return { ...state };
  },
  [ServiceActions.Type.SET_SERVICES_FOR_SEARCH]: (state, action) => {
    let { filtered } = state;
    let { searched } = state;
    if (action.payload) {
      searched = state.all.filter(s => action.payload.includes(s.id));
    }
    filtered = state.all.filter(s => !searched.find((service:ServiceModel) => service.id === s.id));
    return { ...state, searched, filtered };
  }
},
  initialState);