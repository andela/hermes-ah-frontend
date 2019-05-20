import types from '../../../../constants/followee.constants';
import followeeReducer from '../../../../reducers/followee.reducers';

describe('followee reducers', () => {
  it('should return the initial state', () => {
    expect(followeeReducer(undefined, {})).toEqual({
      userFollowee: [],
    });
  });

  it('should handle FETCH_FOLLOWEE_SUCCESS', () => {
    expect(
      followeeReducer([], {
        type: types.FETCH_FOLLOWEE_SUCCESS,
        followee: [{ userFollowee: 'followee' }],
      })
    ).toEqual({
      userFollowee: [{ userFollowee: 'followee' }],
    });
  });

  it('should handle FETCH_FOLLOWEE_FAILURE', () => {
    expect(
      followeeReducer([], {
        type: types.FETCH_FOLLOWEE_FAILURE,
      })
    ).toEqual({});
  });
});
