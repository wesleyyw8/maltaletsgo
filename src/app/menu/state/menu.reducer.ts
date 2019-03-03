import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface App {
  appName: string;
  appColor: string;
}

const initialState: App[] = [{
  appName: 'Hadoop',
  appColor: 'blue'
}, {
  appName: 'Rails',
  appColor: 'red'
}, {
  appName: 'Chronos',
  appColor: 'pink'
}, {
  appName: 'Storm',
  appColor: 'green'
}, {
  appName: 'Spark',
  appColor: 'yellow'
}];

const getAppsFeatureState = createFeatureSelector<any>('apps');

export const getApps = createSelector(
  getAppsFeatureState,
  state => state
);

export function reducer(state = initialState, action): any {
  switch ( action.type ) {
    default:
      return state;
  }
}
