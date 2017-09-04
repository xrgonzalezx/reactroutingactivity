import React, { Component } from 'react';


 class Home extends Component {
  render() {
    // INLINE STYLING
    let styleFriends = {
      "backgroundColor": "white",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "100px",
      "textAlign": "center",
      "fontSize": "18rem",
      "color": "#fff",
      "backgroundImage": "url(./images/DOG.jpg)",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
      "textShadow": "1px 1px 2px black",
      "fontFamily": "Times",
    }
    let styleHeros = {
      "backgroundColor": "#222222",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "100px",
      "textAlign": "center",
      "fontSize": "18rem",
      "color": "#fff",
      "backgroundImage": "url(./images/group.jpg)",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
      "textShadow": "1px 1px 2px black",
      "fontFamily": "Times",
    }
    return (
      <div className="app-body findus offset col-lg-10 col-lg-offset-1">
        <section className="row" style={styleHeros}>
          HERO'S
        </section>
        <section className="row" style={styleFriends}>
          FRIEND'S
        </section>
  </div>
    );
  }
}

export default Home;
