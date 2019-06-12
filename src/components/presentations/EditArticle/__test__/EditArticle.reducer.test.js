import types from '../../../../constants/article.constants';
import editArticleReducer from '../../../../reducers/article.reducers';

describe('editArticle reducers', () => {
  it('should handle PATCH_ARTICLE_SUCCESS', () => {
    expect(
      editArticleReducer(
        {},
        {
          type: types.PATCH_ARTICLE_SUCCESS,
        }
      )
    ).toEqual({ success: true });
  });

  it('should handle PATCH_ARTICLE_FAILURE', () => {
    expect(
      editArticleReducer(
        {},
        {
          type: types.PATCH_ARTICLE_FAILURE,
          success: false,
        }
      )
    ).toEqual({});
  });
});
