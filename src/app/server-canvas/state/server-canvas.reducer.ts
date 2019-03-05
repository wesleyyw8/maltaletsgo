import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ServerCanvasActions, ServerActionTypes } from './server-canvas.actions';

const initialState = [{
  apps: [{
    appName: 'Storm',
    appColor: '#26dead',
    dateAdded: new Date()
  }, {
    appName: 'Rails',
    appColor: '#5c27e3',
    dateAdded: new Date('05/02/2015')
  }]
},
 {
  apps: []
},
{
  apps: [{
    appName: 'Hadoop',
    appColor: '#b312cc',
    dateAdded: new Date()
  }, {
    appName: 'Hadoop',
    appColor: '#b312cc',
    dateAdded: new Date()
  }]
}];

const getServersState = createFeatureSelector<any>('servers');

export const getServers = createSelector(
  getServersState,
  state => state
);

export const getAppsLastServer = createSelector(
  getServersState,
  servers => {
    return servers[servers.length - 1].apps;
  }
);

const addAppOnFirstServerAvailable: any = (state, app) => {
  // Run on the first server running 0 apps.
  for (let x = 0; x <= state.length - 1; x++) {
    if (state[x].apps.length === 0) {
      state[x].apps.push(app);
      return state;
    }
  }
//   If all servers are running at least 1 app, the new app should be started on the first server running only 1
// app
  for (let x = 0; x <= state.length - 1; x++) {
    if (state[x].apps.length === 1) {
      state[x].apps.push(app);
      return state;
    }
  }
  return state;
};

const removeAppFromLastServerPossible: any = (state, appName) => {
  for (let x = state.length - 1; x >= 0; x--) {
    for (let y = state[x].apps.length - 1; y >= 0; y-- ) {
      if (state[x].apps[y].appName === appName) {
        state[x].apps.splice(y, 1);
        return state;
      }
    }
  }
  return state;
};



export function reducer(state = initialState, action) {
  switch ( action.type ) {
    case ServerActionTypes.AddServer:
      return [
        ...state,
        { apps: []}
      ];
    case ServerActionTypes.RemoveServer:
      return [
        ...state.slice(0, -1)
      ];
    case ServerActionTypes.AddApp:
      return [
        ...addAppOnFirstServerAvailable(state, action.payload)
      ];
    case ServerActionTypes.RemoveApp:
      return [
        ...removeAppFromLastServerPossible(state, action.appName)
      ];
    default:
      return state;
  }
}
