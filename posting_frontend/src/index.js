import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Add from './component/posts/Add';
//import Home from './component/Home';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Routes />,
    document.getElementById('root'));
registerServiceWorker();
