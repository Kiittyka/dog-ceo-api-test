import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

class Navbar extends Component {
  componentDidMount() {
    M.AutoInit();
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
                fontSize: 28,
                paddingLeft: 10
              }}
              className="col s5 brand-logo black-text"
            >
              Woof Woof!
            </Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons" style={{color: "#000"}}>menu</i> 
            </a>
            <ul
              className="right hide-on-med-and-down">
              <li>
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "1.5px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Register
              </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large btn-flat waves-effect white black-text"
                >
                  Log In
              </Link>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link
              to="/register"
              style={{
                width: "140px",
                borderRadius: "1.5px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
              </Link>
          </li>
          <li>
            <Link
              to="/login"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large btn-flat waves-effect white black-text"
            >
              Log In
              </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
