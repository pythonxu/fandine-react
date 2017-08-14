import React, { Component } from 'react';
import './inputView.styl'

class Login extends Component {
  render() {
    return (
      <div className="inputView">
        <div className="input-left"></div>
        <input/>
        <div className="input-right"></div>
      </div>
    )
  }
}

export default Login