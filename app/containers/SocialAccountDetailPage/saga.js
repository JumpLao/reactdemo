import { takeLatest, call, put } from 'redux-saga/effects';
import socialAccountAPI from 'api/socialAccount';
import _ from 'lodash';
import { LIST_SOCIAL_POST_REQUEST } from './constants';
import { listSocialPostFail, listSocialPostSuccess } from './actions';
// Individual exports for testing
function* listSocialPost({ query }) {
  try {
    const result = yield call(socialAccountAPI.findOne, query);
    yield put(listSocialPostSuccess(_.get(result, 'socialPosts', [])));
  } catch (e) {
    yield put(listSocialPostFail(e));
  }
}
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LIST_SOCIAL_POST_REQUEST, listSocialPost);
}
