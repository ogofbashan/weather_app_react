import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />,
  </BrowserRouter>,
  document.getElementById('root')
);

//good for development, keeps the page from refresheing, which meands that as we edit the program, the code will not reset the state

if (module.hot) {
  module.hot.accept();
}
