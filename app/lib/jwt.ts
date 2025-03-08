
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const verifyJwtToken = async (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
};

export const createToken = (payload: any) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
};