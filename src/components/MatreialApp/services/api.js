import axios from 'axios';

axios.defaults.baseURL = 'https://6401106b3779a862625182f2.mockapi.io';

export const addMaterial = async values => {
  const response = await axios.post('/materials', values);
  return response.data;
};
