import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma'; // Ensure correct path to prisma instance
import jwt from 'jsonwebtoken';

const verifyAdminToken = (req: NextApiRequest) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) throw new Error('Authorization header missing');
  const token = authHeader.split(' ')[1]; // 'Bearer token'

  if (!token) throw new Error('Token missing');

  try {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) throw new Error('JWT secret missing');
    const decoded = jwt.verify(token, jwtSecret) as any;
    if (decoded.role !== 'ADMIN') throw new Error('Not authorized');
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const decoded = verifyAdminToken(req); // Ensure we verify the admin token

    if (req.method === 'GET') {
      const users = await prisma.user.findMany({
        select: { // Limit the fields returned
          id: true,
          email: true,
          role: true,
        },
      });

      return res.status(200).json(users); // Send only the required user details
    }

    if (req.method === 'PUT') {
      const { id } = req.query;
      const { role, phoneNumber, email } = req.body;

      const updatedUser = await prisma.user.update({
        where: { id: Number(id) },
        data: { role, phoneNumber, email },
      });

      return res.status(200).json(updatedUser);
    }

    if (req.method === 'DELETE') {
      const { id } = req.query;
      await prisma.user.delete({
        where: { id: Number(id) },
      });
      return res.status(204).end(); // Return success status for delete
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(401).json({ error: error.message });
    } else {
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
}
