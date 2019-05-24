import actionType from '../constants/article.constants';

const initialState = {
  articleData: [],
};

const updateArticle = (articleId, articles) => {
  const [currentArticle] = articles.filter(x => x.id === articleId);
  const newArticles = articles.filter(x => x.id !== articleId);
  currentArticle.likes_count += 1;
  return [...newArticles, currentArticle];
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articleData: action.articles,
      };
    case actionType.FETCH_ARTICLES_FAILURE:
      return {
        ...state,
      };
    case actionType.POST_ARTICLES_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case actionType.POST_ARTICLES_FAILURE:
      return {
        ...state,
      };
    case actionType.LIKE_SUCCESS:
      return {
        ...state,
        articleData: updateArticle(action.articleId, action.article),
      };
    case actionType.LIKE_FAILURE:
      return {
        ...state,
        articleData: action.article,
      };
    case actionType.GET_ARTICLE_SUCCESS:
      return {
        ...state,
        articleData: action.article,
      };
    case actionType.GET_ARTICLE_FAILURE:
      return {
        ...state,
      };
    case actionType.PATCH_ARTICLE_SUCCESS:
      return {
        ...state,
        success: true,
        articleData: action.article,
      };
    case actionType.PATCH_ARTICLE_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default articles;
