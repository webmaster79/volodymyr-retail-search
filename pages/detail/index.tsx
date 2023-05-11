import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchProductDetail } from '@/hooks/useProduct';
import ProductDetailsPage from '@/components/pages/ProductDetails';
import MyBeatLoader from '@/components/UI/molecules/BeatLoader';
import Container from '@/components/UI/atoms/Container';

import { ProductDetail } from '@/lib/types';

const ProductDetails: FC = (): JSX.Element => {
  const router = useRouter();
  const productUrl =
    typeof router.query?.url === 'string' ? router.query.url : '';
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    console.log(productUrl)
    if (productUrl) {
      getData(productUrl);
    }
  }, [router]);
  const [product, setProduct] = useState<ProductDetail>();
  const getData = async (url: string) => {
    setLoading(true);
    let data = await fetchProductDetail(url);
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