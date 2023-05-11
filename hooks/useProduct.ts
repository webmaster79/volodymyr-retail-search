import mapListResults from '@/utils/mapProductResults';
import { Product } from '../lib/types';
import axios from 'axios';
import cheerio from 'cheerio';

const FETCH_LIMIT = 9;

export const fetchProducts = async (keyword: string) => {
  const { data } = await axios.get('/api/amazon-proxy', {
    params: {
      k: keyword,
      crid: '3MSGZOA63AWCS',
      sprefix: 'l%2Caps%2C4426',
      ref: 'nb_sb_noss_2',
    },
  });

  return data;
};

export const fetchProductDetail = async (uid: string) => {
  const { data } = await axios.get('/api/amazon-detail', {
    params: {
      uid: uid,
    },
  });
  const result = { results: data }
  return result;
};

export const fetchSearchHistories = async (page:number) => {
  const { data } = await axios.get('/api/search-history', {
    params: {page:page},
  });
  const result = { results: data }
  return result;
};
