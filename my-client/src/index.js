import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {Main} from './main'
 import {Root} from './router'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(<BrowserRouter>
<Root/>
</BrowserRouter>,
     document.getElementById('root'));
registerServiceWorker();