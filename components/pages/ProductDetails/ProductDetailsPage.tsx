import React, { FC } from 'react';
import { Product } from '@/lib/types';
import ProductCardDetails from '@/components/UI/organisms/ProductCardDetails';
import DetailsTemplate from '@/components/templates/DetailsTemplate';

interface Props {
  product: Product | undefined;
}

const ProductDetailsPage: FC<Props> = ({ product }): JSX.Element => {
  return (
    <DetailsTemplate
      backPath="/"
      backPathText="&lt; Back"
      title="Product Detail Page"
    >
      <ProductCardDetails product={product as Product} />
    </DetailsTemplate>
  );
};

export default ProductDetailsPage;
