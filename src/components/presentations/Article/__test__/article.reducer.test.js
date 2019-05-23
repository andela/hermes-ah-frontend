import types from '../../../../constants/article.constants';
import commentTypes from '../../../../constants/comment.constants';
import singleArticle from '../../../../reducers/singleArticle.reducer';

describe('single article reducers', () => {
  it('should return the initial state', () => {
    expect(singleArticle(undefined, {})).toEqual({
      article: [],
      comments: [],
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
});
