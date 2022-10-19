import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'PUT') {
    const projectId = parseInt(req.query.id as string);
    const { name } = JSON.parse(req.body);
    console.log({ name });
    const result = await prisma.projects.update({
      where: { id: projectId },
      data: { name },
    })
    res.json(result);
  }

  if (req.method === 'DELETE') {
    const projectId = parseInt(req.query.id as string);
    const result = await prisma.projects.delete({
      where: { id: projectId }
    });
    res.json(result);
  }

}