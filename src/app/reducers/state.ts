import { TodoModel, ServiceModel } from 'app/models';

export interface RootState {
  todos: RootState.TodoState;
  router?: any;
  services: RootState.ServicesState;
}

export namespace RootState {
  export type TodoState = TodoModel[];
  export type ServicesState = ServiceModel[];
}
