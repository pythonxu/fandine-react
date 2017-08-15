import React, { Component } from 'react';
import './inputView.styl'

class Login extends Component {s
  render() {
    const {inputType, inputImg} = this.props
    return (
      <div className="inputView">
        <img src={require(`${inputImg}`)} className="input-left" ></img>
        <input type={inputType}/>
        <div className="input-right"></div>
      </div>
    )
  }
}

export default Login