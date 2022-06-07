import axios from 'redaxios';
// import axios, { AxiosInstance, AxiosRequestConfig } from 'redaxios';

const BASE_URL = '';

// const axiosConfig: AxiosRequestConfig = {
const axiosConfig = {
  baseURL: BASE_URL,
};

// const client: AxiosInstance = axios.create(axiosConfig);
const client = axios.create(axiosConfig);

const getSomething = async () => {
  const result = await client.get('');
  return result;
};

export default getSomething;
