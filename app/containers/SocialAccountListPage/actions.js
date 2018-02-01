/*
 *
 * SocialAccountListPage actions
 *
 */

import {
  DEFAULT_ACTION,
  LIST_SOCIAL_ACCOUNT_FAIL,
  LIST_SOCIAL_ACCOUNT_REQUEST,
  LIST_SOCIAL_ACCOUNT_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function listSocialAccountRequest() {
  return {
    type: LIST_SOCIAL_ACCOUNT_REQUEST,
  };
}
export function listSocialAccountSuccess(result) {
  return {
    type: LIST_SOCIAL_ACCOUNT_SUCCESS,
    result,
  };
}
export function listSocialAccountFail(error) {
  return {
    type: LIST_SOCIAL_ACCOUNT_FAIL,
    error,
  };
}
