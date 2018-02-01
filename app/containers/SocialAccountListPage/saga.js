import { takeLatest, call, put } from 'redux-saga/effects';
import SocialAccountAPI from 'api/socialAccount';
import { LIST_SOCIAL_ACCOUNT_REQUEST } from './constants';
import { /* listSocialAccountFail, listSocialAccountRequest, */ listSocialAccountSuccess } from './actions';
// Individual exports for testing
function* listSocialAccount(query) {
  try {
    const result = yield call(SocialAccountAPI.find, query);
    yield put(listSocialAccountSuccess(result));
  } catch (e) {
    yield put(listSocialAccountSuccess(e));
  }
}
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LIST_SOCIAL_ACCOUNT_REQUEST, listSocialAccount);
}
