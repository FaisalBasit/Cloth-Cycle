import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma'; // Adjusted path for Prisma client
import bcrypt from 'bcrypt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, phoneNumber, password, role } = req.body;

  // Validate required fields
  if (!email && !phoneNumber) {
    return res.status(400).json({ error: 'Email or phone number is required' });
  }

  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  if (!role || !['USER', 'ADMIN'].includes(role)) {
    return res.status(400).json({ error: 'Invalid role specified' });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    const user = await prisma.user.create({
      data: {
        email,
        phoneNumber,
        password: hashedPassword,
        role,
      },
    });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Email or phone number already exists' });
    }
    res.status(500).json({ error: 'An error occurred while registering user' });
  }
}
