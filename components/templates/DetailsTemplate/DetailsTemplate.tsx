import React, { FC } from 'react';
import Head from 'next/head';
import Header from '@/components/UI/molecules/Header';
import Container from '@/components/UI/atoms/Container';
import Text from '@/components/UI/atoms/Text';
import Title from '@/components/UI/atoms/Title';
import Router from 'next/router'
import { styled } from '@/stitches.config';

interface Props {
  children?: React.ReactNode;
  backPath: string;
  backPathText: string;
  title: string;
}

const Layout = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
});

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
      <Layout>
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
      </Layout>
      
    </div>
  );
};

export default DetailsTemplate;
