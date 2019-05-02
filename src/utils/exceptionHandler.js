const exceptionHandler = ex => {
  const { status } = ex.request;
  if (ex.response && status >= 400 && status < 500) {
    const { error } = ex.response.data;
    if (error === 'Unauthorized') {
      window.location = '/';
    }
    return error.body[0];
  }
  return 'An unexpected error occurred';
};

export default exceptionHandler;
