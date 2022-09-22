import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL } = process.env;

export const connect = (url = DATABASE_URL) => {
  return mongoose.connect(url);
};
