const filterArticles = (articles, articleId) => {
  const newArticlesList = articles.filter(article => article.id !== articleId);
  return newArticlesList;
};

export default filterArticles;
