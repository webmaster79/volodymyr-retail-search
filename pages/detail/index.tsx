import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchProductDetail } from '@/hooks/useProduct';
import ProductDetailsPage from '@/components/pages/ProductDetails';
import MyBeatLoader from '@/components/UI/molecules/BeatLoader';
import Container from '@/components/UI/atoms/Container';

import { Product } from '@/lib/types';

const ProductDetails: FC = (): JSX.Element => {
  const router = useRouter();
  const productUid =
    typeof router.query?.uid === 'string' ? router.query.uid : '';
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    console.log(productUid)
    if (productUid) {
      getData(productUid);
    }
  }, [router]);
  const [product, setProduct] = useState<Product>();
  const getData = async (uid: string) => {
    setLoading(true);
    let data = await fetchProductDetail(uid);
    setProduct(data.results);
    setLoading(false);
  }

  return (
    <>
      {loading ?
        <Container page="spinner">
          <MyBeatLoader loading={true} />
        </Container>
        : <ProductDetailsPage product={product} />}
    </>
  )
};

export default ProductDetails;