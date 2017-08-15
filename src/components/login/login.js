import React, { Component } from 'react';
import InputView from 'base/inputView/inputView'
import './login.styl'

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="top-wrapper">
          <image className="cancel"></image>
        </div>
        <div className="center-wrapper">
          <InputView inputType="text" inputImg="./icon_phone@2x.png"/>
        </div>
      </div>
    )
  }
}

export default Login