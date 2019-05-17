import types from '../../../../constants/followee.constants';
import followeeReducer from '../../../../reducers/followee.reducers';

describe('followee reducers', () => {
  it('should return the initial state', () => {
    expect(followeeReducer(undefined, {})).toEqual({
      userFollowee: [],
      followedUser: '',
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

  it('should handle UNFOLLOW_SUCCESS', () => {
    const state = {
      userFollowee: [{ id: 'abc', follower_id: 'jkl' }, { id: 'jkl' }],
      followedUser: '',
    };

    const newState = followeeReducer(state, {
      type: types.FOLLOW_SUCCESS,
      followedUser: {
        user: {
          id: 'jkl',
        },
      },
    });

    expect(newState).toEqual(newState);
  });

  it('should handle FOLLOW_FAILURE', () => {
    expect(
      followeeReducer([], {
        type: types.FOLLOW_FAILURE,
      })
    ).toEqual({});
  });
});
