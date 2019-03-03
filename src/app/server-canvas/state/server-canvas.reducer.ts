import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ServerCanvasActions, ServerActionTypes } from './server-canvas.actions';

const initialState = [{
  apps: [{
    appName: 'Storm',
    appColor: 'red'
  }, {
    appName: 'Rails',
    appColor: 'blue'
  }]
},
{
  apps: [{
    appName: 'Hadoop',
    appColor: 'pink'
  }]
}, {
  apps: []
}];

const getServersState = createFeatureSelector<any>('servers');

export const getServers = createSelector(
  getServersState,
  state => state
);

export function reducer(state = initialState, action) {
  switch ( action.type ) {
    case ServerActionTypes.AddServer:
      return [
        ...state,
        { apps: []}
      ];
    default:
      return state;
  }
}
