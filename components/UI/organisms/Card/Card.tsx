import React, { FC } from 'react';
import CardBody from '../../molecules/CardBody';
import ResponsiveImage from '../../atoms/ResponsiveImage';
import { styled, theme } from '@/stitches.config';
import { useRouter } from 'next/router';

interface Props {
  imgSrc: string;
  size: 'large';
  title: string;
  uid: string;
}

const StyledCard = styled('div', {
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  width: '$w100',
  height: '$cardHeight',
  '& div': {
    height: '$cardImgHeight',
  },
  '& div img': {
    padding: '$4',
  },
});

const Card: FC<Props> = ({ imgSrc, title, uid, ...props }): JSX.Element => {
  const router = useRouter();
  const handleClick = (e:React.MouseEvent,uid :string) => {
    e.preventDefault();
    router.push({
      pathname:'/detail',
      query:{
        uid: uid
      }
    })
  }
  return (
    <StyledCard
      onClick={(e: React.MouseEvent) => handleClick(e, uid)}
    >
      <ResponsiveImage
        src={imgSrc}
        alt={title}
        imageBpWidths={[theme.sizes.cardImgWidthBp2.value]}
      />
      <CardBody title={title} linkText="Details →" />
    </StyledCard>
  );
};

export default Card;
