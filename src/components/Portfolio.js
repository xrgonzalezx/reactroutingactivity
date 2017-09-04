import React, { Component } from 'react';
import '../styles/index.css';

 class Portfolio extends Component {
  render() {
    // INLINE STYLING
    let portfolioStyle = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/minecraftheader.jpg)",
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "height": "100%",
      "padding": "100px"
    }

    return (
      <div className="app-body about offset col-lg-10 col-lg-offset-1">
        <section className="row" style= {portfolioStyle}>
          <article className="col-lg-5">
            <h2 className="headings">
              Portfolio
            </h2>
            <hr/>
            <p className="primary-text"> Así es como se escribe una página de portfoilio. soy del planeta tierra. La yarda del hierro ha sido grande </p>
          </article>
        </section>
      </div>
    );
  }
}

export default Portfolio;
