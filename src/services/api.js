import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export const get = async (endpoint) => {
  const url = `${baseUrl}/${endpoint}`;
  const { data } = await axios.get(url);
  return data.data;
};
