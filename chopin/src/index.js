import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Store } from './util/store';

const app = document.getElementById('root');

ReactDOM.render(
<Provider store={Store}>
  <BrowserRouter>
      <div>
          <Route path='/' component={App}/>
      </div>
  </BrowserRouter>
</Provider>, app);

registerServiceWorker();
