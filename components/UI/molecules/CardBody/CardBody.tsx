import React, { FC } from 'react';
import Link from 'next/link';
import { styled } from '@/stitches.config';

interface Props {
  title: string;
  linkText: string;
  description?: string;
}

const StyledCardBody = styled('div', {
  width: '$w100',
  alignItems: 'flex-start',
  padding: '$4',
  background: '#fafafa',
  borderRadius: '0px 0px $2 $2',
  flex: 'none',
  order: 1,
});

const CardBody: FC<Props> = ({ title, description, linkText }) => {
  return (
    <StyledCardBody>
      {title}
    </StyledCardBody>
  );
};

export default CardBody;
