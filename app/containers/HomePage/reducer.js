/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { CALCULATE_INTEREST } from './constants';

// The initial state of the App
const initialState = fromJS({
  sixMonths: '',
  oneYear: '',
  twoYears: ''
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CALCULATE_INTEREST:
      return state.set({
        sixMonths: action.sixMonths,
        oneYear: action.oneYear,
        twoYears: action.twoYears
      });
    default:
      return state;
  }
}

export default homeReducer;
