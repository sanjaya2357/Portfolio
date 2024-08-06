import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';


const renderReactDom = () => {

  window.rootContent = document.getElementById('root');
  ReactDOM.render((<BrowserRouter basename={window.contextPath}>
    <Main />
  </BrowserRouter>), window.rootContent);
}
renderReactDom();

