import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//IMPORT COMPONENTS
import About from './components/About';
import Heros from './components/Heros';
import Contact from './components/Contact';
import BaseLayout from './components/BaseLayout';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/menu" component={Heros} />
        <Route path="/" component={About}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
