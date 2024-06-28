import dotenv from 'dotenv';
dotenv.config();

export const APILINK =
  process.env.NEXT_API_URL || 'https://www.api-football.com/';
// process.env.NEXT_API_URL || 'https://admin.elmarma.com/api/v1/';
