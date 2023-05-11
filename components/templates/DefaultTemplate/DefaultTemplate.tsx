import React, { FC, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/UI/molecules/Header';
import SearchBar from '@/components/UI/molecules/SearchBar';
import Container from '@/components/UI/atoms/Container';
import { styled } from '@/stitches.config';
import Title from '@/components/UI/atoms/Title';

interface Props {
  children?: React.ReactNode;
  title: string;
  searchText:string;
}

const StyledDiv = styled('div', {
  background: '#f0f0f0',
});

const DefaultTemplate: FC<Props> = ({ children, title, searchText ='' }): JSX.Element => {
  const [searchValue, setSearchValue] = useState(searchText);
  const handleSetSearchValue = (value: string) => {
    setSearchValue(value);
  };

  return (
    <StyledDiv>
      <Head>
        <title>Product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Title as={'h5'}>{title}</Title>
      </Header>
      <Container>
        <SearchBar
          setSearchText={handleSetSearchValue}
          searchText={searchValue}
          searchResults={[]}
        />
        <main>{children}</main>
      </Container>
    </StyledDiv>
  );
};

export default DefaultTemplate;
