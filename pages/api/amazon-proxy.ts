import mapListResults from '@/utils/mapProductResults';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma-client';
import cheerio from 'cheerio';
import { Product } from '../../lib/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { k, crid, sprefix, ref } = req.query;

  let searchHistory = await prisma.searchHistory.findFirst({
    where: {
      keyword: String(k)
    },
    include: {
      searchedProducts: {
        include: {
          product: true
        }
      }
    }
  })

  try {

    let products: Product[] = [];
    if (searchHistory) {
      searchHistory.searchedProducts.map((p) => {
        const product = {
          uid: p.product.uid,
          name: p.product.name,
          imgUrl: p.product.imgUrl,
          price: p.product.price
        } as Product
        products.push(product)
      })
      
      const data = { results: mapListResults(products as Product[]) }
      res.status(200).json(data);
    } else {
      const headers = {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
      };
  
      const response = await axios.get('https://www.amazon.com/s', {
        params: {
          k,
          crid,
          sprefix,
          ref,
        },
        headers,
      });
  
      const $ = cheerio.load(response.data);
      $("div.s-result-item.s-widget-spacing-small").each((index, element) => {
        const name = $(element).find("span.a-size-medium.a-color-base.a-text-normal").text();
        const link = $(element).find("a.a-link-normal.s-no-outline")[0].attribs.href;
        const uid = element.attribs['data-asin'];
        const imgUrl = $(element).find("img.s-image")[0].attribs.src;
        products.push({ uid: uid, name: name, imgUrl: imgUrl, price: '$100' })
      })
      const data = { results: mapListResults(products as Product[]).slice(0, 9) }

      const searchHistory = await prisma.searchHistory.create({
        data: {
          keyword: String(k)
        },
      });
      data.results.map(async (result) => {
        let product = await prisma.product.findFirst({
          where: {
            uid: result.uid
          }
        })
        if (!product) {
          product = await prisma.product.create({
            data: {
              ...result
            },
          });
        }

        const searchedProduct = await prisma.searchedProduct.create({
          data: {
            searchHistoryId: searchHistory.id,
            productId: product.id
          },
        });
      })
      res.status(200).json(data);
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}
