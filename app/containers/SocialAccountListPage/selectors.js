import { createSelector } from 'reselect';

/**
 * Direct selector to the socialAccountListPage state domain
 */
const selectSocialAccountListPageDomain = (state) => state.get('socialAccountListPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SocialAccountListPage
 */

const makeSelectSocialAccountListPage = () => createSelector(
  selectSocialAccountListPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectSocialAccountListPage;
export {
  selectSocialAccountListPageDomain,
};
