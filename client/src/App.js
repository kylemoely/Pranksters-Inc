import logo from './logo.svg';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Pranks from './pages/Pranks';
import Signup from './pages/Signup'

const client = new ApolloClient({
  uri: 'https://boiling-beyond-75815.herokuapp.com/',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div className = "container">
          <Routes>
            <Route
            path="/"
            element={<Home />} />
            <Route
            path="/login"
            element={<Login />} />
            <Route
            path="/signup"
            element={<Signup />} />
            <Route 
            path="/pranks"
            element={<Pranks />} />
            <Route 
            path="/orders"
            element={<Orders />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>

  );
}
<div className="text-3xl font-bold underline bg-amber-600">
        Is this thing on?
      </div>
export default App;
