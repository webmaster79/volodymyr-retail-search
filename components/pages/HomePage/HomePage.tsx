import DefaultTemplate from '@/components/templates/DefaultTemplate';
import ItemList from '@/components/UI/organisms/ItemList';
import { Product } from '@/lib/types';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface Props {
  productList:Product[] ;
}

const HomePage: FC<Props> = ({ productList }): JSX.Element => {
  const router = useRouter()
  return (
    <DefaultTemplate title="NextJS Product Search App" searchText={router.query.q as string} >
      <ItemList
        list={productList}
      />
    </DefaultTemplate>
  );
};

export default HomePage;
