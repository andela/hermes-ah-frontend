const validateImage = file => {
  let valid = true;
  let message = 'uploading...';
  if (file && !/\/(gif|jpg|jpeg|tiff|png)$/i.test(file.type)) {
    valid = false;
    message = 'Invalid picture format';
  }

  if (file && parseFloat(file.size) > 2000000) {
    valid = false;
    message = 'File size exceeds 2MB';
  }

  return { valid, message };
};

export default validateImage;
