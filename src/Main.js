import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Header from './Header';
import Subject from './Subject';
import Footer from './Footer';

const Main = () => {
  
  return (
    <Router basename={window.contextPath}>
        <link rel="stylesheet" href="css/index.css" />
      <Header />
      <Subject/>
      <Footer />
    </Router>
    
  );
}
export default Main;
