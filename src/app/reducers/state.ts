import { ServiceModel } from 'app/models';

export interface RootState {
  router?: any;
  services: ServicesState;
}

export type ServicesState = {all: ServiceModel[], filtered: ServiceModel[], searched: ServiceModel[]};
