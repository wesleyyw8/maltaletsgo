import { Action } from '@ngrx/store';

export enum ServerActionTypes {
  AddServer = '[Servers] Add Server',
  RemoveServer = '[Servers] Remove Server',
  AddApp = '[Apps] Add App',
  RemoveApp = '[Apps] Remove App'
}

export class AddServer implements Action {
  readonly type = ServerActionTypes.AddServer;
}

export class RemoveServer implements Action {
  readonly type = ServerActionTypes.RemoveServer;
}

export class AddApp implements Action {
  readonly type = ServerActionTypes.AddApp;
  constructor(public payload) {
    payload.dateAdded = new Date();
  }
}

export class RemoveApp implements Action {
  readonly type = ServerActionTypes.RemoveApp;
  constructor(public appName) {}
}

export type ServerCanvasActions = AddServer | RemoveServer | AddApp | RemoveApp;
