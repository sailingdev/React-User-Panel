import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { Redirect } from 'react-router-dom';
import '../css/ForgetCSS.css';


class ForgetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      error: false,
      messageFromServer: false,
      shownnullError:false
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const {email }= this.state;
    if( email === ''){
      this.setState({
       error:false,
       messageFromServer:false

      })
    }else
      {
      const userData={email:this.state.email};
      console.log(userData);
      axios
        .post('http://localhost:7000/auth/forget',userData )
        .then (response => response.data)
        .then( res =>{
          if(res.status){
            this.setState({
              ...this.state,
              error:false , messageFromServer:true 
            })
          }else{
            this.setState({
                error:res.message,messageFromServer:false
            })
          }
        })}       
  };

  render() {
    const {messageFromServer, error } = this.state;
   
    return (

      <div>
        {error  && (
          <div className="validError">
             Email is not valid Pleae type the correct email <span></span>
          </div>
        )}

        <div className="my-pagea">
          {/* <div className="m-logo"><img src="https://s3.amazonaws.com/htw/dt-contest-entries/189723/canada-technology-logo-design.png"/></div> */}
        <h2>Reset Your Password <img src="http://passwordreset.endowedschools.org/Images/users_lock.png"/></h2>
        <p>Please enter your Email ID to receive password reset link</p>
         
        
        <form onSubmit={this.handleSubmit}>
              <div className="EmailDisplay">
                <input 
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
               
              </div>
              <div className="row">
                  <div className="col-xs-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block btn-flat"
                    >
                     Send 
                    </button>
                  </div>
              </div>
        </form>
        <a href="/login">
        Take me back to Sign in
          </a>
        </div>
        {messageFromServer && (
          <Redirect to="/emailsuccess" />
        )}
      </div>
    );
  }
}


export default ForgetPassword;
