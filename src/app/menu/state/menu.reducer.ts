import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface App {
  appName: string;
  appColor1: string;
  appColor2: string;
}

const initialState: App[] = [{
  appName: 'Hadoop',
  appColor1: 'blue',
  appColor2: 'CornflowerBlue'
}, {
  appName: 'Rails',
  appColor1: 'red',
  appColor2: 'orange'
}, {
  appName: 'Chronos',
  appColor1: 'pink',
  appColor2: 'violet'
}, {
  appName: 'Storm',
  appColor1: 'green',
  appColor2: 'black'
}, {
  appName: 'Spark',
  appColor1: 'yellow',
  appColor2: 'white'
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
