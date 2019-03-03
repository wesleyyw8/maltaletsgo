import { Action } from '@ngrx/store';

export enum ServerActionTypes {
  AddServer = '[Servers] Add Server',
}

export class AddServer implements Action {
  readonly type = ServerActionTypes.AddServer;
}

// export class SetCurrentProduct implements Action {
//   readonly type = ServerActionTypes.SetCurrentProduct;

//   constructor(public payload: Product) { }
// }
export type ServerCanvasActions = AddServer;