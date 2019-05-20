import types from '../../../../constants/reviewerRequests.constant';
import reviewerRequestReducer from '../../../../reducers/reviewerRequests';

describe('reviewer request reducer', () => {
  it('should return the initial state', () => {
    expect(reviewerRequestReducer(undefined, {})).toEqual({
      userRequests: [],
    });
  });

  it('should handle REVIEWER_REQUESTS_SUCCESS', () => {
    expect(
      reviewerRequestReducer([], {
        type: types.REVIEWER_REQUESTS_SUCCESS,
        request: [{ userRequests: 'request' }],
      })
    ).toEqual({
      userRequests: [{ userRequests: 'request' }],
    });
  });

  it('should handle REVIEWER_REQUESTS_FAILURE', () => {
    expect(
      reviewerRequestReducer([], {
        type: types.REVIEWER_REQUESTS_FAILURE,
      })
    ).toEqual({});
  });
});
