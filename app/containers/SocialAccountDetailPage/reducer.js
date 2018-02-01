/*
 *
 * SocialAccountDetailPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LIST_SOCIAL_POST_FAIL,
  LIST_SOCIAL_POST_REQUEST,
  LIST_SOCIAL_POST_SUCCESS,
} from './constants';

const initialState = fromJS({
  socialPosts: {
    loading: false,
    error: false,
    result: [],
  },
});

function socialAccountDetailPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LIST_SOCIAL_POST_REQUEST:
      return state.setIn(['socialPosts', 'loading'], true).setIn(['socialPosts', 'error'], false);
    case LIST_SOCIAL_POST_SUCCESS:
      return state.setIn(['socialPosts', 'loading'], false).setIn(['socialPosts', 'error'], false).setIn(['socialPosts', 'result'], action.result);
    case LIST_SOCIAL_POST_FAIL:
      return state.setIn(['socialPosts', 'loading'], false).setIn(['socialPosts', 'error'], action.error);
    default:
      return state;
  }
}

export default socialAccountDetailPageReducer;
