import axios from 'axios';

export const getImages = (query, page) => {
  const KEY = '14966503-8c2cc7e35fab5f49b5ff89f4d';
  const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios.get(url);
};
