import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import  store  from './store';

const app = document.getElementById('root');

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
      <div>
          <Route path='/' component={App}/>
      </div>
  </BrowserRouter>
</Provider>, app);

registerServiceWorker();
