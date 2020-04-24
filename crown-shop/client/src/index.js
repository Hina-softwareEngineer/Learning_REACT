import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import  {store, persistor} from './redux/store';
import {ApolloProvider} from 'react-apollo';
import { createHttpLink} from 'apollo-link-http';
import { InMemoryCache} from 'apollo-cache-inmemory';
import { ApolloClient , gql} from 'apollo-boost';



const httpLink = createHttpLink({
  uri : 'https://crwn-clothing.com'
});

const cache=new InMemoryCache();

const client= new ApolloClient({
  link : httpLink,
  cache
});

client.query({
  query : gql`
  {
    getCollectionsByTitle(title : "hats"){
      id 
      title
      items{
        id 
        name
        price
        imageUrls
      }
    }
  }
  `
}).then(response => console.log(response))



ReactDOM.render(
  <ApolloProvider>
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
          <PersistGate persistor={persistor}>   
              <App />
          </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

