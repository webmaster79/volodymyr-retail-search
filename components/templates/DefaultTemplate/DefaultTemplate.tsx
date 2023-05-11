import React, { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/UI/molecules/Header';
import SearchBar from '@/components/UI/molecules/SearchBar';
import Container from '@/components/UI/atoms/Container';
import { styled } from '@/stitches.config';
import Title from '@/components/UI/atoms/Title';
import { fetchSearchHistories } from '../../../hooks/useProduct';
import { SearchHistory } from '@/lib/types';
import { useRouter } from 'next/router';
import Text from '@/components/UI/atoms/Text';

interface Props {
  children?: React.ReactNode;
  title: string;
  searchText: string;
}

const StyledDiv = styled('div', {
  background: '#f0f0f0',
});

const KeywordItem = styled('div', {
  fontSize: '20px',
  textAlign: 'center',
  padding: '10px',
  borderBottom: '1px solid #656d76',
  cursor: 'pointer'
});

const Layout = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
});

const Left = styled('div', {
  background: '#FFFFFF',
  width: '300px',
  height: '100%',
  marginTop: '120px'
});

const PaginationDiv = styled('div', {
  textAlign: 'center',
  padding:'10px',
  '& button': {
    fontSize: '18px',
    background: '#d0b7df',
    borderRadius:'5px',
    minWidth:'50px',
    margin:'0px 10px',
    cursor:'pointer',
    
  }
});

const DefaultTemplate: FC<Props> = ({ children, title, searchText = '' }): JSX.Element => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(searchText);
  const handleSetSearchValue = (value: string) => {
    setSearchValue(value);
  };
  const [histories, setHistories] = useState<SearchHistory[]>([]);
  const [page, setPage] = useState<number>(0);
  const [pageTotal,setPageTotal] = useState<number>(0);
  useEffect(() => {
    getData();
  }, [page]);
  const getData = async () => {
    let { results } = await fetchSearchHistories(page);
    setHistories(results.data as SearchHistory[]);
    setPageTotal(Math.ceil(results.total/10));
  }
  return (
    <StyledDiv>
      <Head>
        <title>Product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Title as={'h5'}>{title}</Title>
      </Header>
      <div>

        <Layout>
          <Left>
            <Text>Search History</Text>
            {histories.map((history, index) => (
              <KeywordItem key={index} onClick={() => router.push({
                pathname: '/',
                query: {
                  q: history.keyword
                }
              })}>
                {history.keyword}
              </KeywordItem>
            ))}
            <PaginationDiv>
              <button onClick={() => setPage((page - 1) > 0 ? page - 1 : 0)}>prev</button>
              <button>{page + 1}</button>
              <button onClick={() => setPage((page + 1)>pageTotal?page + 1:page)}>next</button>
            </PaginationDiv>
          </Left>
          <Container>
            <SearchBar
              setSearchText={handleSetSearchValue}
              searchText={searchValue}
              searchResults={[]}
            />
            <main>
              {children}
            </main>
          </Container>
        </Layout>
      </div>
    </StyledDiv>
  );
};

export default DefaultTemplate;
