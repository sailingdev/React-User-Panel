import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import '../css/register.css';

import lockIcon from '../images/lock-icon.png';
import userIcon from '../images/user.png';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import svg from '../images/hero-illustration.svg';
import { loginUser } from "../../actions/authentication";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      id:'',
      errors:{}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
 
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({
        errors:nextProps.errors
      })
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      username: this.state.email,
      password: this.state.password,
     
    };
    this.props.loginUser(userData,this.props.history);
    this.setState({ errors:''})
  }

  render() {
    const { id ,errors} = this.state;
    console.log('errorsas',errors);
   
   
    return (
      <div className="front-bg">

          { errors.error == "Invalid Credentials" && (
              <div className="NextError"> Please Type the correct Email and Password<span></span></div>
          )}

        <div className="left-side bg-gradiaent">
          <div className="fr-logo">
            <img src={logo} alt=""/>
            <h2>FREELANCER</h2>
          </div>

          <form onSubmit={this.onSubmit}>
              <div className="form-group" >
                <img src={userIcon} alt =""/>
                <input required type="text" name="email"  placeholder="Username" value={this.state.email} onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <img src={lockIcon} alt=""/>
                <input required type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
              </div>

              <button className="login-btn" type="submit">
                Sign In
              </button>

              <div className="forget-pwd">
                <Link to="/forget">Forget Password?</Link>
              </div>

              <button className="facebook-btn" type="submit">
                Login via Facebook
              </button>
          </form>

             
              <p>
               Don't have an account. <Link to="/signup">Sign Up</Link>
             </p>
        
         
        </div>
        <div className="right-side">
          <div className="hd-wrap">
            {/* <h1>FIND BEST FREELANCERS.</h1>
            <p>Book instant appointment</p> */}
            <div className="hero-app bounce-animate">
              <img className="img1 vert-move" src={svg} alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors:state.errors,
  auth:state.auth,

  
})

export default connect( mapStateToProps, {loginUser} )(withRouter(Login));
