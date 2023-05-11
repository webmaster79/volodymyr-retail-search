import React, { FC, useEffect, useState } from 'react';
import { fetchProducts } from '../hooks/useProduct';
import HomePage from '@/components/pages/HomePage';
import MyBeatLoader from '@/components/UI/molecules/BeatLoader';
import Container from '@/components/UI/atoms/Container';
import { useRouter } from "next/router";
import { Product } from '@/lib/types';

const IndexPage: FC = (): JSX.Element => {
  const router = useRouter();
  const [loading,setLoading] = useState<boolean>(true);
  const [pData,setData] = useState<Product[]>([]);
  useEffect(()=>{
    if(router.query.q !== undefined){
      getData(router.query.q as string);
    }else{
      setData([]);
      setLoading(false);
    }
  },[router.query.q]);
  const getData = async(keyword:string) => {
    setLoading(true);
    let data = await fetchProducts(keyword);
    setData(data.results);
    setLoading(false);
  }
  return(
    <>
    {loading?
      <Container page="spinner">
        <MyBeatLoader loading={true} />
      </Container>
    :
     <HomePage productList={pData} />
    }
    </>
  )
};

export default IndexPage;
