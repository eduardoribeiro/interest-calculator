/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectLoanValue = () => createSelector(
  selectHome,
  (homeState) => homeState.get('value')
);

export {
  selectHome,
  makeSelectLoanValue,
};
