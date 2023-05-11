import React, { FC } from 'react';
import CardBody from '../../molecules/CardBody';
import ResponsiveImage from '../../atoms/ResponsiveImage';
import { styled, theme } from '@/stitches.config';
import { useRouter } from 'next/router';

interface Props {
  imgSrc: string;
  imgAlt: string;
  size: 'large';
  title: string;
  linkPath: string;
}

const StyledCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  width: '$w100',
  height: '$cardHeight',
  '& div:nth-child(1)': {
    height: '$cardImgHeight',
  },
  '& div img': {
    padding: '$4',
  },
});

const Card: FC<Props> = ({ imgSrc, imgAlt, title, linkPath, ...props }): JSX.Element => {
  const router = useRouter();
  const handleClick = (e:React.MouseEvent,link :string) => {
    e.preventDefault();
    router.push({
      pathname:'/detail',
      query:{
        url:link
      }
    })
  }
  return (
    <StyledCard
      onClick={(e: React.MouseEvent) => handleClick(e, linkPath)}
    >
      <ResponsiveImage
        src={imgSrc}
        alt={imgAlt}
        imageBpWidths={[theme.sizes.cardImgWidthBp2.value]}
      />
      <CardBody title={title} linkText="Details →" linkPath={linkPath} />
    </StyledCard>
  );
};

export default Card;
