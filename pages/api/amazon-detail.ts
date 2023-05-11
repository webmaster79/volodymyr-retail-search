import axios from 'axios';
import cheerio from 'cheerio';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { uid } = req.query;
  
  try {
    let product = await prisma.product.findFirst({
      where: {
        uid: String(uid)
      }
    })
    console.log('product', product)
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}
