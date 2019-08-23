import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema';
import resolvers from './resolvers';
import models from './models';

mongoose.connect('mongodb://localhost:27017/local')

const db = mongoose.connection;
db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
db.once('open', () => {
    console.log( '+++Connected to mongoose')
});

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    formatError: error => {
        return {
            ...error
        };
    },
    context: async ({ req, connection }) => {
        if (connection) {
            console.log("connection");
            return {
                models
            };
        }

        if (req) {
            console.log("req");
            return {
                models
            };
        }
    }
});

const app = express();
server.applyMiddleware({ app });

const port = 4000;

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

// ⚠️ Pay attention to the fact that we are calling `listen` on the http server variable, and not on `app`.
httpServer.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
    console.log(`🚀 Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`)
})
