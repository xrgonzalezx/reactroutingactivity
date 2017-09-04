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
import Home from './components/Home';
import Portfolio from './components/Portfolio'
import References from './components/References'


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/references" component={References} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/heros" component={Heros} />
        <Route path="/about" component={About}/>
        <Route path="/" component={Home}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
