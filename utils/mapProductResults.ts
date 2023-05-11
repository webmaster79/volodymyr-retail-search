import { Product } from '@/lib/types';
export const IMG_URL_KEY = 'imgUrl';
export const IMG_ALT_KEY = 'imgAlt';
export const LINK_PATH_KEY = 'linkPath';

const mapListResults = (fetchedResults: Product[]) => {
  return fetchedResults.map((item) => ({
    ...item,
    name: `${item.name}`,
    [IMG_URL_KEY]: item.url,
    [LINK_PATH_KEY]: `/detail?url=${encodeURIComponent(item.link)}`,
    [IMG_ALT_KEY]: `${item.name}`,
  }));
};

export default mapListResults;
