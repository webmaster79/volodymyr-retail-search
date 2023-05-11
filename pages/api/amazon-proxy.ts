import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma-client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { k, crid, sprefix, ref } = req.query;
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
  };

  try {
    const response = await axios.get('https://www.amazon.com/s', {
      params: {
        k,
        crid,
        sprefix,
        ref,
      },
      headers,
    });



    // If keyword is not empty
    if (k) {
      const history = await prisma.history.create({
        data: { keyword: String(k) },
      });
    }

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}
