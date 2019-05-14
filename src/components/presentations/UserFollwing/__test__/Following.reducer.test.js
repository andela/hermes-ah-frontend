import types from '../../../../constants/follow.constants';
import followingReducer from '../../../../reducers/following.reducers';

describe('following reducers', () => {
  it('should return the initial state', () => {
    expect(followingReducer(undefined, {})).toEqual({
      userFollowing: [],
      unFollowedUser: '',
    });
  });

  it('should handle FETCH_FOLLOWING_SUCCESS', () => {
    expect(
      followingReducer([], {
        type: types.FETCH_FOLLOWING_SUCCESS,
        following: [{ userFollowing: 'following' }],
      })
    ).toEqual({
      userFollowing: [{ userFollowing: 'following' }],
    });
  });

  it('should handle FETCH_FOLLOWING_FAILURE', () => {
    expect(
      followingReducer([], {
        type: types.FETCH_FOLLOWING_FAILURE,
      })
    ).toEqual({});
  });

  it('should handle UNFOLLOW_SUCCESS', () => {
    expect(
      followingReducer([], {
        type: types.UNFOLLOW_SUCCESS,
      })
    ).toEqual({});
  });

  it('should handle UNFOLLOW_FAILURE', () => {
    expect(
      followingReducer([], {
        type: types.UNFOLLOW_FAILURE,
      })
    ).toEqual({});
  });
});
