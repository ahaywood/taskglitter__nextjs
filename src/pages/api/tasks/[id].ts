import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'PUT') {
    const taskId = parseInt(req.query.id as string);
    const { name } = JSON.parse(req.body);
    const result = await prisma.tasks.update({
      where: { id: taskId },
      data: { name },
    })
    res.json(result);
  }

  if (req.method === 'DELETE') {
    const taskId = parseInt(req.query.id as string);
    const result = await prisma.tasks.delete({
      where: { id: taskId }
    });
    res.json(result);
  }

}