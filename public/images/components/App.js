import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from '../components/BaseLayout';



class App extends Component {

  render() {

    return (
      <BaseLayout>
        <div className="menu col-md-10 col-md-offset-1">
          <h2 className="col-md-offset-2"></h2>
        </div>
       </BaseLayout>
    );
  }
}

export default App;
