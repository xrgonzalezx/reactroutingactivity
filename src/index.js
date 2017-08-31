import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//IMPORT COMPONENTS
import Menu from './components/Menu';
import About from './components/About';
import Find from './components/Findus';
import BaseLayout from './components/Layout';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/findus" component={Find} />
        <Route path="/menu" component={Menu} />
        <Route path="/" component={About}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
