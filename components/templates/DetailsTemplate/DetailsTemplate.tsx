import React, { FC } from 'react';
import Head from 'next/head';
import Header from '@/components/UI/molecules/Header';
import Container from '@/components/UI/atoms/Container';
import Text from '@/components/UI/atoms/Text';
import Title from '@/components/UI/atoms/Title';
import Router from 'next/router'

interface Props {
  children?: React.ReactNode;
  backPath: string;
  backPathText: string;
  title: string;
}

const DetailsTemplate: FC<Props> = ({
  children,
  backPath,
  backPathText,
  title,
}): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Product Data</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Title as={'h5'}>{title}</Title>
      </Header>
      <Container padding={'p4'}>
        <Text
          textStyle={'textParagraph'}
          css={{
            color: '$seafoamDark',
            cursor: 'pointer',
            marginTop: '$4',
          }}
          onClick={() => Router.back()}
        >
          <strong>{backPathText}</strong>
        </Text>
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default DetailsTemplate;
