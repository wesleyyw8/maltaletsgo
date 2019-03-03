import { createFeatureSelector, createSelector } from '@ngrx/store';

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
    default:
      return state;
  }
}
