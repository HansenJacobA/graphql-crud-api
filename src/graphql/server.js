import { ApolloServer } from 'apollo-server';
import typeDefs from './schema.js';
import resolvers from './resolvers.js';
import connect, { models } from '../db/index.js';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context() {
        return models;
    },
    cache: 'bounded'
});

export const start = async () => {
    try {
        await connect().then(() => console.log('🏃💨 MongoDB running'));
        server.listen().then(({ url }) => console.log(`🚀 Apollo Server ready at ${url}`));
    } catch (e) {
        console.error(e);
    };
};
