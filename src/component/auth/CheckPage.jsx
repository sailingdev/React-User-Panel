import React, { Component } from 'react'
import '../css/opensans-font.css';
import '../css/style.css';
import Carrt from '../images/form-v7.jpg';



export default class CheckPage extends Component {
  render() {

    return (
      
      <div className="form-v7">
        <div className="page-content">
          <div className="form-v7-content">
            <div className="form-left">
              <img src= {Carrt}alt="form" />
              <p className="text-1">Sign Up</p>
              <p className="text-2">Privaci policy & Term of service</p>
            </div>
            <form className="form-detail" >
              <div className="form-row">
                <label>USERNAME</label>
                <input type="text" name="username" id="username" className="input-text"/>
              </div>
              <div className="form-row">
                <label>E-MAIL</label>
                <input type="text" name="your_email" id="your_email" className="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
              </div>
              <div className="form-row">
                <label>PASSWORD</label>
                <input type="password" name="password" id="password" className="input-text" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"/>
                
              </div>

              <div className="form-row">
                <label>CONFIRM PASSWORD</label>
                <input type="password" name="comfirm_password" id="comfirm_password" className="input-text" required/>
               
              </div>
              <div className="form-row-last">
                <input type="submit" name="register" className="register" value="Register"/>
                <p>Or<a href="#">Sign in</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
