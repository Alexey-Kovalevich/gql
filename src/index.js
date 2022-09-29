import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  split,
  makeVar,
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import App from './App';
import { SERVER_URL, URL_WS } from './helpers/consts';
import './index.css';
import { getMainDefinition } from '@apollo/client/utilities';

const cartVar = makeVar({
  items: [],
});

const cache = new InMemoryCache({
  typePolicies: {
    Pizza: {
      keyFields: ['id', 'name', 'image'],
    },
    Query: {
      fields: {
        cartVar: {
          read() {
            return cartVar();
          },
        },
      },
    },
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: `${URL_WS}/graphql`,
  })
);

const httpLink = new HttpLink({
  uri: `${SERVER_URL}/graphql`,
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
