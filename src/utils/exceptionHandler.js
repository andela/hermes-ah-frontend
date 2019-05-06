const exceptionHandler = ex => {
  const { status } = ex.request;
  if (ex.response && status >= 400 && status < 500) {
    const { body } = ex.response.data.errors;
    return body[0];
  }
  return 'An unexpected error occurred';
};

export default exceptionHandler;
