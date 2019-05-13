import http from './httpService';

const getProfile = async id => {
  const { data } = await http.get(`/profile/${id}`);
  return data;
};

const returnProfileOfResearchers = async () => {
  const arr = [];
  const id = [];

  const { data } = await http.get('/suggested/researchers');

  Object.values(data.suggestion).forEach(value => {
    Object.values(value).forEach(item => {
      id.push(item);
    });
  });

  const uniq = [...new Set(id)];
  uniq.forEach(async item => {
    const profile = await getProfile(item);
    arr.push(profile);
  });

  return arr;
};

export default returnProfileOfResearchers;
