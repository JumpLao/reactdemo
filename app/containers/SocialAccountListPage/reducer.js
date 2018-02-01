/*
 *
 * SocialAccountListPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LIST_SOCIAL_ACCOUNT_FAIL,
  LIST_SOCIAL_ACCOUNT_REQUEST,
  LIST_SOCIAL_ACCOUNT_SUCCESS,
} from './constants';

const initialState = fromJS({
  socialAccounts: {
    loading: false,
    error: false,
    result: [],
  },
});

function socialAccountListPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LIST_SOCIAL_ACCOUNT_REQUEST:
      return state.setIn(['socialAccounts', 'loading'], true).setIn(['socialAccounts', 'error'], false);
    case LIST_SOCIAL_ACCOUNT_SUCCESS:
      return state.setIn(['socialAccounts', 'loading'], false).setIn(['socialAccounts', 'error'], false).setIn(['socialAccounts', 'result'], action.result);
    case LIST_SOCIAL_ACCOUNT_FAIL:
      return state.setIn(['socialAccounts', 'loading'], false).setIn(['socialAccounts', 'error'], action.error);
    default:
      return state;
  }
}

export default socialAccountListPageReducer;
