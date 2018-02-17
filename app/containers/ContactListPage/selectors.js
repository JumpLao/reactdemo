import { createSelector } from 'reselect';

/**
 * Direct selector to the contactListPage state domain
 */
const selectContactListPageDomain = (state) => state.get('contactListPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ContactListPage
 */

const makeSelectContactListPage = () => createSelector(
  selectContactListPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectContactListPage;
export {
  selectContactListPageDomain,
};
