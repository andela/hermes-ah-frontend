import types from '../../../../constants/article.constants';
import commentTypes from '../../../../constants/comment.constants';
import singleArticle from '../../../../reducers/singleArticle.reducer';

describe('single article reducers', () => {
  it('should return the initial state', () => {
    expect(singleArticle(undefined, {})).toEqual({
      article: [],
      comments: [],
      error: false,
      commentHistory: [],
    });
  });

  it('should handle FETCH_SINGLE_ARTICLE_SUCCESS', () => {
    expect(
      singleArticle([], {
        type: types.FETCH_SINGLE_ARTICLE_SUCCESS,
        article: [{ article: [], comments: [] }],
      })
    ).toEqual({
      article: [{ article: [], comments: [] }],
    });
  });

  it('should handle FETCH_SINGLE_ARTICLE_FAILURE', () => {
    expect(
      singleArticle([], {
        type: types.FETCH_SINGLE_ARTICLE_FAILURE,
      })
    ).toEqual({
      error: true,
    });
  });

  it('should handle RESET_FAILING_ARTICLE', () => {
    expect(
      singleArticle([], {
        type: types.RESET_FAILING_ARTICLE,
      })
    ).toEqual({
      error: false,
    });
  });

  it('should handle POST_COMMENT_SUCCESS', () => {
    expect(
      singleArticle([], {
        type: commentTypes.POST_COMMENT_SUCCESS,
        comment: [{ comments: [] }],
      })
    ).toEqual({
      comments: [[{ comments: [] }]],
    });
  });

  it('should handle POST_COMMENT_FAILURE', () => {
    expect(
      singleArticle([], {
        type: commentTypes.POST_COMMENT_FAILURE,
      })
    ).toEqual([]);
  });

  it('should handle FETCH_COMMENT_HISTORY_SUCCESS', () => {
    expect(
      singleArticle([], {
        type: commentTypes.FETCH_COMMENT_HISTORY_SUCCESS,
        commentHistory: undefined,
      })
    ).toEqual({
      commentHistory: undefined,
    });
  });

  it('should handle LIKE_FAILURE', () => {
    expect(
      singleArticle([], {
        type: types.LIKE_FAILURE,
      })
    ).toEqual({});
  });

  it('should handle LIKE_COMMENT_FAILURE', () => {
    expect(
      singleArticle([], {
        type: types.LIKE_COMMENT_FAILURE,
      })
    ).toEqual({});
  });
});
