import loadingConstant from '../constants/loading.constants';

const stopContentLoading = () => ({
  type: loadingConstant.CONTENT_LOADING_STOP,
});

export default stopContentLoading;
