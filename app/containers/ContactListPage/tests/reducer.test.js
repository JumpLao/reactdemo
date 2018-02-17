
import { fromJS } from 'immutable';
import contactListPageReducer from '../reducer';

describe('contactListPageReducer', () => {
  it('returns the initial state', () => {
    expect(contactListPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
