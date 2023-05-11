import React from 'react';
import Card from '../Card';
import { styled } from '@/stitches.config';
import { Product } from '@/lib/types';


const GridContainer = styled('div', {
  width: '$w100',
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax($cardWidthBp1, $cardWidthBp3))`,
  gap: '$6',
  justifyItems: 'center',
  justifyContent: 'center',
  padding: '0 $4',
});

const ItemList = ({ list }: { list: Product[] }) => {
  return (
    <GridContainer>
      {list.map((item) =>
        <Card
          key={item.uid}
          size={'large'}
          imgSrc={item.imgUrl}
          title={item.name}
          uid={item.uid}
        />
        )
      }
    </GridContainer>
  );
};

export default ItemList;
