const UniqIds = data => {
  const articleArray = [];
  data.forEach(item => {
    const id = articleArray.findIndex(
      article => article.article_id === item.article_id
    );
    if (id <= -1) {
      articleArray.push(item);
    }
  });

  return articleArray;
};

export default UniqIds;
