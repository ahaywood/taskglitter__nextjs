import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, projectId } = req.body;

  const result = await prisma.tasks.create({
    data: {
      name,
      projectId
    },
  });

  res.json(result);
}