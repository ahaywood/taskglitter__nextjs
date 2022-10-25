import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const taskId = parseInt(req.query.id as string);
  const result = await prisma.tasks.update({
    where: { id: taskId },
    data: { completedDateTime: null },
  })
  res.json(result);

}