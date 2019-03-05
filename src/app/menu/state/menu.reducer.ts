import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface App {
  appName: string;
  appColor: string;
}

const initialState: App[] = [{
  appName: 'Hadoop',
  appColor: '#b312cc'
}, {
  appName: 'Rails',
  appColor: '#5c27e3'
}, {
  appName: 'Chronos',
  appColor: '#009cfc'
}, {
  appName: 'Storm',
  appColor: '#26dead'
}, {
  appName: 'Spark',
  appColor: '#69eb28'
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
