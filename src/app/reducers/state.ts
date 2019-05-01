import { ServiceModel } from 'app/models';

export interface RootState {
  router?: any;
  services: RootState.ServicesState;
}

export type ServicesState = {all: ServiceModel[], filtered: ServiceModel[], searched: ServiceModel[]};
