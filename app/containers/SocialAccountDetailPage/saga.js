import { takeLatest, call, put } from 'redux-saga/effects';
import SocialPostAPI from 'api/socialPost';
import { LIST_SOCIAL_POST_REQUEST } from './constants';
import { listSocialPostFail, listSocialPostSuccess } from './actions';
// Individual exports for testing
function* listSocialAccount(query) {
  try {
    const result = yield call(SocialPostAPI.find, query);
    yield put(listSocialPostSuccess(result));
  } catch (e) {
    yield put(listSocialPostFail(e));
  }
}
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LIST_SOCIAL_POST_REQUEST, listSocialAccount);
}
