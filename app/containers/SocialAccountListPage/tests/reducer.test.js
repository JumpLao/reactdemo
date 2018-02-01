
import { fromJS } from 'immutable';
import socialAccountListPageReducer from '../reducer';

describe('socialAccountListPageReducer', () => {
  it('returns the initial state', () => {
    expect(socialAccountListPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
