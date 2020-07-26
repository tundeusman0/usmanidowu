import React from 'react';
import { Spring } from 'react-spring/renderprops';
import logo from '../images/logo.png';

class NavBar extends React.Component {
  render() {
    return (
      <div className="toggle">
        <Spring
          from={{ opacity: 0, marginTop: -500 }}
          to={{ opacity: 1, marginTop: 0 }}
          config={{ delay: 1000, duration: 1000 }}
        >
          {props => (
            <div style={props}>
              <img src={logo} alt="logo" />
              <h1>
                Usman Idowu is a web developer/MERN stack developer with over 3
                years of experience
              </h1>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

export default NavBar;
