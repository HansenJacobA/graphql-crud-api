import { ApolloServer } from 'apollo-server';
import typeDefs from '../graphql/schema.js';
import resolvers from '../graphql/resolvers.js';
import { models } from '../db/index.js';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const { TEST_DB_URL, TEST_PORT } = process.env;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context() {
        return models;
    },
    cache: 'bounded'
});

export const startTesting = async () => {
    try {
        await mongoose.connect(TEST_DB_URL).then(() => console.log('🔬 MonogoDB ready for testing! 🧪'));
        server.listen(TEST_PORT).then(({ url }) => console.log(`🚀 Apollo Server ready at ${url}`));
    } catch (e) {
        console.error(e);
    };
};
