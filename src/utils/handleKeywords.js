const handleKeywords = obj => {
  const keywords = [];

  Object.values(obj).forEach(err => {
    Object.values(err).forEach(e => {
      keywords.push(e);
    });
  });

  return keywords;
};

export default handleKeywords;
