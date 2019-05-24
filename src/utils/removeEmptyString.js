const removeEmptyString = data => {
  const newObj = {};
  Object.keys(data).forEach(prop => {
    if (data[prop]) {
      newObj[prop] = data[prop];
    }
  });
  return newObj;
};

export default removeEmptyString;
