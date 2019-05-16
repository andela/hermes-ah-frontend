import actionType from '../constants/article.constants';

const initialState = {
  articleData: [],
};

const updateArticle = (articleId, article) => {
  const currentArticle = article.filter(x => x.id === articleId);
  const newArticles = article.filter(x => x.id !== articleId);
  let likes = currentArticle[0].likes_count;
  likes += 1;
  currentArticle[0].likes_count = likes;
  return [...newArticles, currentArticle[0]];
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
    default:
      return state;
  }
};

export default articles;
