import mapListResults from '@/utils/mapProductResults';
import { Product, ProductDetail } from '../lib/types';
import axios from 'axios';
import cheerio from 'cheerio';

const FETCH_LIMIT = 9;

export const fetchProducts = async (keyword: string) => {
  const { data } = await axios.get('/api/amazon-proxy', {
    params: {
      k: keyword,
      crid: '3MSGZOA63AWCS',
      sprefix: 'l%2Caps%2C4426',
      ref: 'nb_sb_noss_2',
    },
  });


  const html = data;
  const $ = cheerio.load(html);

  let products: Product[] = [];
  $("div.s-result-item.s-widget-spacing-small").each((index, element) => {
    const name = $(element).find("span.a-size-medium.a-color-base.a-text-normal").text();
    const link = $(element).find("a.a-link-normal.s-no-outline")[0].attribs.href;
    const uid = element.attribs['data-uuid'];
    const image = $(element).find("img.s-image")[0].attribs.src;
    products.push({ uid: uid, name: name, link: link, url: image })
  })

  const result = { results: mapListResults(products as Product[]).slice(0, 9) }
  return result;
};

export const fetchProductDetail = async (url: string) => {
  const { data } = await axios.get('/api/amazon-detail', {
    params: {
      url: url,
    },
  });


  const html = data;
  const $ = cheerio.load(html);

  const image = $('.imgTagWrapper>img')[0].attribs.src;
  const name = $('#productTitle').text();
  const price = $('.a-price-whole').first().text();

  let product: ProductDetail = {
    image: image,
    name: name,
    price: price
  };
  console.log(product)
  const result = { results: product }
  return result;
};
