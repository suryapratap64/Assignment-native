import express from "express";
import http from "http";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/typeDefs";
import { eventResolver } from "./graphql/resolvers/eventResolver";
import { userResolver } from "./graphql/resolvers/userResolver";
import { authMiddleware } from "./auth";
import { setupSocket } from "./socket";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { Server } from "socket.io";

async function startServer() {
  const app: express.Application = express();

  const httpServer = http.createServer(app);
  const io = new Server(httpServer, { cors: { origin: "*" } });

  setupSocket(io);

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers: [eventResolver, userResolver],
  });

  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({
      user: authMiddleware(req),
      io,
    }),
  });

  await server.start();
  server.applyMiddleware({ app });

  httpServer.listen(4000, () => {
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer();
