import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    context: ({ req }) => ({req}),
    link: createUploadLink({
        uri: 'http://localhost:5000/graphql',
        headers:
        {
          'Apollo-Require-Preflight': 'true',
          'Content-Type': 'application/json',
    
        },
    }),
    
});



export default client;
