import { createSelector } from 'reselect';

/**
 * Direct selector to the socialAccountDetailPage state domain
 */
const selectSocialAccountDetailPageDomain = (state) => state.get('socialAccountDetailPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SocialAccountDetailPage
 */

const makeSelectSocialAccountDetailPage = () => createSelector(
  selectSocialAccountDetailPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectSocialAccountDetailPage;
export {
  selectSocialAccountDetailPageDomain,
};
