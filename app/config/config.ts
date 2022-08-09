import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

export const PORT: string | number = process.env.PORT || 5000;

// MongoDB Coonection Url
export const CONNECTION_URI = process.env.CONNECTION_URI;
