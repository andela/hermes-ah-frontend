import types from '../../../../constants/profile.constants';
import profileReducer from '../../../../reducers/profile.reducers';

describe('profile reducers', () => {
  it('should return the initial state', () => {
    expect(profileReducer(undefined, {})).toEqual({
      userProfile: [],
    });
  });

  it('should handle FETCH_PROFILE_SUCCESS', () => {
    expect(
      profileReducer([], {
        type: types.FETCH_PROFILE_SUCCESS,
        profile: [{ user: 'jest' }],
      })
    ).toEqual({
      userProfile: [{ user: 'jest' }],
    });
  });

  it('should handle FETCH_PROFILE_FAILURE', () => {
    expect(
      profileReducer([], {
        type: types.FETCH_PROFILE_FAILURE,
      })
    ).toEqual({});
  });
});