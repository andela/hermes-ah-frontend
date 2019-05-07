const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/sojidan/upload';
const cloudinaryUploadPreset = 'ggousm2p';

const uploadToCloudnary = data => {
  data.append('upload_preset', cloudinaryUploadPreset);

  return window
    .fetch(cloudinaryUrl, {
      method: 'POST',
      mode: 'cors',
      body: data,
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};

export default uploadToCloudnary;
