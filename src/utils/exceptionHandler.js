import { toast } from 'react-toastify';

const exceptionHandler = ex => {
  if (!ex.request) return null;
  const { status } = ex.request;
  if (ex.response && status >= 400 && status < 500) {
    const { body } = ex.response.data.errors;
    return toast.error(body[0]);
  }
  return toast.error('An unexpected error occurred');
};

export default exceptionHandler;
