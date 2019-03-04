import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ServerCanvasActions, ServerActionTypes } from './server-canvas.actions';

const initialState = [{
  apps: [{
    appName: 'Storm',
    appColor: 'red',
    dateAdded: new Date()
  }, {
    appName: 'Rails',
    appColor: 'blue',
    dateAdded: new Date('05/02/2015')
  }]
},
{
  apps: [{
    appName: 'Hadoop',
    appColor: 'pink',
    dateAdded: new Date()
  }]
}, {
  apps: []
}];

const getServersState = createFeatureSelector<any>('servers');

export const getServers = createSelector(
  getServersState,
  state => state
);

const addAppOnFirstServerAvailable: any = (state, app) => {
  for (let x=0;x<=state.length -1;x++) {
    if (state[x].apps.length < 2) {
      state[x].apps.push(app)
      return state;
    }
  }
  state.push({
    apps: [app]
  });
  return state;
}

const removeAppFromLastServerPossible: any = (state, appName) => {
  for (let x=state.length -1;x>=0;x--) {
    for (let y= state[x].apps.length -1;y >=0; y-- ) {
      if (state[x].apps[y].appName === appName) {
        state[x].apps.splice(y,1);
        return state
      }
    }
  }
  return state;
}

export function reducer(state = initialState, action) {
  switch ( action.type ) {
    case ServerActionTypes.AddServer:
      return [
        ...state,
        { apps: []}
      ];
    case ServerActionTypes.RemoveServer:
      return [
        ...state.slice(0,-1)
      ]
    case ServerActionTypes.AddApp:
      return [
        ...addAppOnFirstServerAvailable(state, action.payload)
      ]
    case ServerActionTypes.RemoveApp:
      return [
        ...removeAppFromLastServerPossible(state, action.appName)
      ]
    default:
      return state;
  }
}
