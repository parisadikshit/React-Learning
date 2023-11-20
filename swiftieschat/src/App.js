
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import CountryList from "./components/countryList";

const client = new ApolloClient({
  uri:'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
})
function App() {
  console.log(process.env.GRAPHQL_ENDPOINT)
  return (
    <ApolloProvider client={client}>
    <div className="App">
     <CountryList/>
    </div>
    </ApolloProvider>
  );
}

export default App;
