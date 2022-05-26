import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(process.env.REACT_APP_GRAPHQL_ENDPOINT || '');
export const api = createApi({
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
  baseQuery: graphqlRequestBaseQuery({
    client,
  }),
  endpoints: () => ({
  }),
});
