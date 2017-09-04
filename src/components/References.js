import React, { Component } from 'react';
import '../styles/index.css';

 class References extends Component {
  render() {

    let rogan = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/rogan.jpg)",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "235px",
      "fontSize": "8em",
      "fontFamily": "times"
    }

    let obama = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/obama.jpg)",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "235px",
      "fontSize": "6em",
      "fontFamily": "times"
   }

    let rock = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/rock.jpg)",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "235px",
      "fontSize": "6em",
      "fontFamily": "times"
    }

    let referencesQuote={
      "color":"white",
      "fontSize": "25px"

    }


    return (
      <div className="app-body about offset col-lg-10 col-lg-offset-1">
        <section className="row" style={rogan}>
          Rogan
          <p style={referencesQuote}>"I like this guy, fear is not a issue"</p>
          <p style={referencesQuote}>Joe Rogan, contact me at jreexperience@gmail.com for any additional info</p>
        </section>
        <section className="row" style={obama}>
          Obama
          <p style={referencesQuote}>"I and the people of this great nation approve of this man"</p>
            <p style={referencesQuote}>Barrack Obama, contact me at bobama@whitehouse.gov for any additional info</p>
        </section>
          <section className="row" style={rock}>
          The Rock
          <p style={referencesQuote}>"Can you smell what im cooking"</p>
            <p style={referencesQuote}>Dwayne Johnson, contact me at thepeopleschamp@gmail.com for any additional info</p>
        </section>
      </div>
    );
  }
}

export default References;
