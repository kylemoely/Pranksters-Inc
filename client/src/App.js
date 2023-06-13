import logo from './logo.svg';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="text-3xl font-bold underline bg-amber-600">
        Is this thing on?
      </div>
    </ApolloProvider>

  );
}

export default App;
