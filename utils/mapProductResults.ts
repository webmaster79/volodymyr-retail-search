import { Product } from '@/lib/types';

const mapListResults = (fetchedResults: Product[]) => {
  return fetchedResults.map((item) => ({
    ...item,
  }));
};

export default mapListResults;
