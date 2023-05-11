import { FC } from 'react';
import { styled, theme } from '@/stitches.config';
import { ProductDetail } from '@/lib/types';
import ResponsiveImage from '../../atoms/ResponsiveImage';

interface Props {
  product: ProductDetail;
}

const DetailsCard = styled('div', {
  maxWidth: '400px',
  margin: '0 auto',
  background: '$mango',
  borderRadius: '$1 $1 $1 $1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  '& div:first-child': {
    backgroundColor: '$seafoamMid',
    height: '300px',
  },
  '& div:last-child': {
    width: '$w100',
    flexGrow: '1',
    paddingBottom: '$6',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  '& ul': {
    padding: '$4',
    '& li': {
      padding: '$1',
    },
  },
});

const ProductCardDetails: FC<Props> = ({ product }): JSX.Element => {
  return (
    <DetailsCard>
      <ResponsiveImage
        src={product.image}
        alt={`${product.name} artwork`}
        imageBpWidths={[theme.sizes.cardImgWidthBp2.value]}
      />
      <ul>
        <li>
          <strong>Name:</strong>{' '}
          {product.name[0].toUpperCase() + product.name.slice(1)}
        </li>
        <li>
          <strong>Price:</strong>{' '}
          {product.price}$
        </li>
      </ul>
    </DetailsCard>
  );
};

export default ProductCardDetails;
