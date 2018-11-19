import React, { Component, withRouter } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
        <App />
    </HashRouter>,
    document.getElementById('root')
);
registerServiceWorker();
