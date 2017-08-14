import React, { Component } from 'react';
import './inputView.styl'

class Login extends Component {
  render() {
    const {typestyle, typeimg} = this.props

    return (
      <div className="inputView">
        <div style={styleimg} className="input-left" ></div>
        <input type={typestyle}/>
        <div className="input-right"></div>
      </div>
    )
  }
}

export default Login