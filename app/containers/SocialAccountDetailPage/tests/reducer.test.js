
import { fromJS } from 'immutable';
import socialAccountDetailPageReducer from '../reducer';

describe('socialAccountDetailPageReducer', () => {
  it('returns the initial state', () => {
    expect(socialAccountDetailPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
