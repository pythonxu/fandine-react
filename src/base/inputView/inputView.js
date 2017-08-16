import React, { Component } from 'react';
import './inputView.styl'

class Login extends Component {
  render() {
    const {inputType, inputImg} = this.props
    return (
      <div className="inputView">
        <img src={require(`${inputImg}`)} className="input-left" ></img>
        <input type={inputType} className="input-center"/>
        <div className="input-right"></div>
      </div>
    )
  }
}

export default Login