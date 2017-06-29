import React, { Component } from 'react';
import './App.css';
import HeaderMenu from './HeaderMenu';

export default class Header extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <h3>Skill Matrix</h3>
            <HeaderMenu/>
          </div>
        </div>
    );
  }
}





