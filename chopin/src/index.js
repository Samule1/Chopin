import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import LoginPage from './components/LoginPage'
import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root');

ReactDOM.render(
<BrowserRouter>
    <div>
        <Route path='/' component={App}/>
    </div>
</BrowserRouter>, app);
registerServiceWorker();
