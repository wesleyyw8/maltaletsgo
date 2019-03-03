import { Action } from '@ngrx/store';

export enum ServerActionTypes {
  AddServer = '[Servers] Add Server',
  RemoveServer = '[Servers] Remove Server'
}

export class AddServer implements Action {
  readonly type = ServerActionTypes.AddServer;
}

export class RemoveServer implements Action {
  readonly type = ServerActionTypes.RemoveServer;
}

export type ServerCanvasActions = AddServer | RemoveServer;