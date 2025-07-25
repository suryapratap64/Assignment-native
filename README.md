1->backend
Create a backend folder to organize server-side code.

Initialize npm project with npm init -y.

Install TypeScript and dev tools (typescript, ts-node-dev, @types/node).

Install runtime libraries:

Express for HTTP server

Apollo Server Express to handle GraphQL APIs

GraphQL as the query language

Prisma ORM and @prisma/client to connect to PostgreSQL

Socket.IO for real-time updates

jsonwebtoken and bcrypt for authentication and password hashing

Install type definitions for TypeScript compatibility (@types/jsonwebtoken, @types/bcrypt, @types/express).

Use Prisma to define database models like:

User (stores user data)

Event (stores event details and status)

Create resolvers to manage:

Adding new users

Logging in users

Adding/listing/updating events

Use Socket.IO to send real-time notifications when:

New events are added

Event status changes

Use Apollo Server with Express to expose GraphQL APIs.

Manage database connections and migrations with Prisma CLI commands


//frontend 

Create a new React Native app using Expo for fast development.

Install libraries:

@apollo/client and graphql to interact with the backend GraphQL APIs

Zustand for lightweight global state management (e.g., store auth token)

Build three main screens:

Login Screen: user enters email and password to get JWT token

Event List Screen: displays events fetched from backend

Event Detail Screen: shows detailed info about a selected event

Use Apollo Client to send queries and mutations to the backend.

Store the authentication token securely using Zustand.

Listen for real-time updates (e.g., event status change) using Socket.IO.
