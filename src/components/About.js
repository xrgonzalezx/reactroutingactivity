import React, { Component } from 'react';
//IMPORT STYLES
import '../styles/App.css';

export default class About extends Component {
  render() {
    // INLINE STYLING
    let historyStyle = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()",
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "height": "100%",
      "padding": "100px"
    }
    let awardsStyle = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/horsepic.jpg)",
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "backgroundPosition": "top",
      "height": "100%",
      "padding": "100px"
    }
    return (
      <div className="app-body about offset col-lg-10 col-lg-offset-1">
        <section className="row" style={historyStyle}>
          <article className="col-lg-6 col-lg-offset-3">
            <h2 className="headings">
              History
            </h2>
            <hr/>
            <p className="primary-text">
              Minecraft is a sandbox video game created and designed by Swedish game designer Markus "Notch" Persson, and later fully developed and published by Mojang. The creative and building aspects of Minecraft enable players to build constructions out of textured cubes in a 3D procedurally generated world.
            </p>
          </article>
        </section>
        <section className="row" style= {awardsStyle}>
          <article className="col-lg-5">
            <h2 className="headings">
              Awards
            </h2>
            <hr/>
            <p className="primary-text">Minecraft has received praise from critics, and won numerous awards and accolades. As of February 2017, over 121 million copies have been sold across all platforms, making it the second best-selling video game of all time, only behind the various releases of Tetris. In September 2014, Microsoft announced a deal to buy Mojang and the Minecraft intellectual property for US$2.5 billion, with the acquisition being completed two months later. </p>
          </article>
        </section>
      </div>
    );
  }
}
