import React, { Component } from 'react'

export default class Logout extends Component {

  componentWillMount(){
    this.logoutFunction();
  }

  logoutFunction(){
    let  onclick = () =>{
      localStorage.removeItem('jwtToken');
      window.location.href('/login');
    }

    

  }
  render() {
    return (
      null
    )
  }
}
