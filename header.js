import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import './header.css';
import Sidebar from './sidebar';

const Header = (props) => {
  return (
    <div className="header">
      <Sidebar/>
      <img id="logo" src="./logo3.png"/>

      <h1 id="title">BROKE MILLENIAL</h1>

      <a id="corner-login" href="google.com"> Log In </a>

    </div>
    );
}

ReactDOM.render(<Header />, document.getElementById('root') );


export default Header;

