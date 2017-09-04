import React, {Component} from 'react';
// IMPORT LINK
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

 class BaseLayout extends Component {
  render(){
    // INLINE STYLING
    let titleStyle = {
      "fontFamily": "Times",
      "fontSize": "18rem"
    }
    let subtitleStyle = {
      "fontFamily": "Raleway",
      "fontSize": "10rem"
    }
    let headerStyle = {
      "textAlign": "center",
      "height": "600px",
      "color": "#fff",
      "backgroundImage": "url(./images/plainheader.png)",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 9px",
      "textShadow": "1px 1px 2px black",
      "fontFamily": "Times",
    }
    let navTitle = {
      "fontFamily": "Arizonia",
      "fontSize": "180%"
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li style={navTitle}>

                   <NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink>
                </li>
                <li>

                  <NavLink activeClassName="selected" className="nav-link" to="/about">About</NavLink>
                </li>
                <li>

                  <NavLink activeClassName="selected" className="nav-link" to="/heros">Heros</NavLink>
                </li>
                <li>

                    <NavLink activeClassName="selected" className="nav-link" to="/contact">Contact</NavLink>
                </li>
                <li>

                  <NavLink activeClassName="selected" className="nav-link" to="/portfolio">Portfolio</NavLink>
                </li>
                <li>

                  <NavLink activeClassName="selected" className="nav-link" to="/references">References</NavLink>
                </li>
              </ul>
            </div>
          </div>
            <div className="col-lg-12 header" style={headerStyle}>
              <div className="header-title">
               <div className="title-name" style={titleStyle}>
                  Minecraft
               </div>
                <div className="subtitle" style={subtitleStyle}>
                Create Your World
               </div>
              </div>
          </div>
        </nav>
        {this.props.children}
        <footer className="col-lg-11">
          <span className="footer-title">Mindcraft </span>
          <span>
            300 Spartan Street, Orlando,FL, 12345 | (800) 898-9999
          </span>
        </footer>
      </div>
    );
  }
}

export default BaseLayout;
