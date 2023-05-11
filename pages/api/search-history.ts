import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page } = req.query;
  const skip = 10 * Number.parseInt(page ? String(page) : '0')
  try {
    let total = await prisma.searchHistory.count({
    })
    let searchHistories = await prisma.searchHistory.findMany({
      skip: skip,
      take: 10,
    })
    res.status(200).json({data: searchHistories, total: total});
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}
