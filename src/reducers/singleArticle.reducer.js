import actionType from '../constants/article.constants';

const initialState = {
  article: [],
};

// const updateArticle = (articleId, articles) => {
//   const [currentArticle] = articles.filter(x => x.id === articleId);
//   const newArticles = articles.filter(x => x.id !== articleId);
//   currentArticle.likes_count += 1;
//   return [...newArticles, currentArticle];
// };

const singleArticle = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_SINGLE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.article,
      };
    default:
      return state;
  }
};

export default singleArticle;
