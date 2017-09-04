import React, { Component } from 'react';


 class Contact extends Component {
  render() {
    // INLINE STYLING
    let style = {
      "backgroundColor": "#213456",
      "backgroundImage": "url()",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "100px"
    }
    let subHeadings = {
      "color": "#fff",
    }

    return (
      <div className="app-body contact offset col-lg-10 col-lg-offset-1">
        <section className="row" style={style}>
          <div className="col-lg-8 map">
            <h3 className="sub-headings" style={subHeadings}>Mailing Address</h3>
            <a href=""><p className="primary-text">Minecraft 300 Spartan Street, Orlando, FL , 12345 </p></a>
          </div>
          <div className="col-lg-4">
            <h3 className="sub-headings" style={subHeadings}>
              Contact Us
            </h3>
            <hr/>
            <p className="primary-text">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>  800-898-9999</span>
            </p>
            <p className="primary-text">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span> xegioooooox@gamil.com</span>
            </p>
            <p className="primary-text">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
            <span> tonnyb@facebook.com</span>
            </p>
            <p className="primary-text">
            <i className="fa fa-github" aria-hidden="true"></i>
            <span> tonnyb@github.com</span>
            </p>

      </div>
    </section>
  </div>
    );
  }
}
export default Contact;
