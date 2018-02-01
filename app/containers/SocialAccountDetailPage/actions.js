/*
 *
 * SocialAccountDetailPage actions
 *
 */

import {
  DEFAULT_ACTION,
  LIST_SOCIAL_POST_FAIL,
  LIST_SOCIAL_POST_REQUEST,
  LIST_SOCIAL_POST_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function listSocialPostRequest(query) {
  return {
    type: LIST_SOCIAL_POST_REQUEST,
    query,
  };
}
export function listSocialPostSuccess(result) {
  return {
    type: LIST_SOCIAL_POST_SUCCESS,
    result,
  };
}
export function listSocialPostFail(error) {
  return {
    type: LIST_SOCIAL_POST_FAIL,
    error,
  };
}
