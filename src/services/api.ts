import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://169.254.172.166:3333'
});