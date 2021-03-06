import { createSelector } from 'reselect';

/**
 * Direct selector to the formPage state domain
 */
const selectFormPageDomain = (state) => state.get('formPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FormPage
 */

const makeSelectFormPage = () => createSelector(
  selectFormPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectFormPage;
export {
  selectFormPageDomain,
};
