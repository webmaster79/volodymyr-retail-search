import axios from 'axios';
import cheerio from 'cheerio';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
  };

  try {
    const response = await axios.get(`https://www.amazon.com${url}`, {

      headers,
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}
