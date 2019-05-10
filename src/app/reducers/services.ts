import { ServicesState } from './state';
import { handleActions } from 'redux-actions';
import { Type as ServiceActionType } from '../actions/';
import { ServiceModel } from '../models';
import { CartIcon } from '../icons';

const allServices: ServiceModel[] = [
  {
    id: 1,
    text: 'Sell stamps',
    icon: CartIcon,
  },
  {
    id: 2,
    text: 'Article tracking',
    icon: CartIcon,
  },
  {
    id: 3,
    text: 'Product sale',
    icon: CartIcon,
  },
  {
    id: 4,
    text: 'Billpay',
    icon: CartIcon,
  },
  {
    id: 5,
    text: 'Police check',
    icon: CartIcon,
  },
  {
    id: 6,
    text: 'Postage access',
    icon: CartIcon,
  },
  {
    id: 7,
    text: 'Customer search',
    icon: CartIcon,
  },
  {
    id: 8,
    text: 'Help',
    icon: CartIcon,
  }
];

export const initialState: ServicesState = {
  all: allServices,
  filtered: allServices,
  searched: []
};

const getFilteredServices = (state: ServicesState, searched: ServiceModel[]) =>
  state.all.filter((s) => !searched.find((service: ServiceModel) => service.id === s.id));

export const servicesReducer = handleActions<ServicesState, any>(
  {
    [ServiceActionType.FILTER_SERVICE_SEARCH]: (state, { payload = '' }) => {
      const { searched } = state;
      if (payload) {
        const filteredServices = state.filtered.filter((s: ServiceModel) =>
          s.text.toLowerCase().includes(payload.toLowerCase())
        );
        return { ...state, filtered: filteredServices };
      }
      return {
        ...state,
        filtered: state.all.filter((s) => !searched.find((service) => service.id === s.id))
      };
    },
    [ServiceActionType.ADD_SERVICE_ON_SEARCH]: (state, action) => {
      if (action.payload) {
        const searched = state.all.find((s: ServiceModel) => s.id === action.payload.id);
        if (searched) {
          state.searched.push(searched);
        }
      }
      const filtered = getFilteredServices(state, state.searched);
      return { ...state, filtered };
    },
    [ServiceActionType.REMOVE_SERVICE_FROM_SEARCH]: (state, action) => {
      if (action.payload) {
        state.searched = state.searched.filter((s) => s.id !== action.payload);
      }
      const filtered = getFilteredServices(state, state.searched);
      return { ...state, filtered };
    },
    [ServiceActionType.SET_SERVICES_FOR_SEARCH]: (state, action) => {
      let { filtered } = state;
      let { searched } = state;
      if (action.payload) {
        searched = action.payload.map((id: number) => state.all.find((s) => s.id === id));
      }
      filtered = getFilteredServices(state, searched);
      return { ...state, searched, filtered };
    }
  },
  initialState
);
