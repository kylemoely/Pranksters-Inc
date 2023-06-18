import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Pranks from './pages/Pranks';
import Orders from './pages/Orders';


import './App.css';
import Orderform from './pages/Orderforms';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router basename="/">
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
            path="/pranks/:prankId"
            element={<Orderform />} /> 
            <Route 
            path="/orders"
            element={<Orders />} /> 
          </Routes>
        </div>
        <Footer/>
      </Router>
    </ApolloProvider>

  );
}

export default App;
