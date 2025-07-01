// backend/src/graphql/resolvers/userResolver.ts
export const userResolver = {
  Query: {
    me: (_: any, __: any, ctx: any) => ctx.user,
  },
};
