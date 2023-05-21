import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://mongodb+srv://nlotoo93:vzeJoo6OMeMivEJB@cluster0.spy4lji.mongodb.net/',
    cache: new InMemoryCache(),
});



export default client;
