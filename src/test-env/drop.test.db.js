import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const { TEST_DB_URL } = process.env;

async function dropDB() {
    await mongoose.createConnection(TEST_DB_URL).dropDatabase();
    await mongoose.disconnect();
};

dropDB();
