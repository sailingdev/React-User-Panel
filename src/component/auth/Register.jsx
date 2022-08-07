import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/authentication'
import classnames from 'classnames';

import lockIcon from '../images/lock-icon.png';
import userIcon from '../images/user.png';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import svg from '../images/hero-illustration.svg';
import clientImg from '../images/ivr_banner_img (1).png';

import axios from 'axios';
import { id } from "postcss-selector-parser";
import '../css/register.css';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName:'',
      password:'',
      password2:'',
      email:'',
      roles:'',
      
      content:'',
      msg:'',
      clientError:false,
      errors:'',
      passMatch:false

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    console.log(this.props)
    const id = localStorage.getItem('myid')
    if(id == '1'){
        this.setState({content:svg , msg:"Find best Projects" })
    }else{
      this.setState({content:clientImg , msg:"Find Best Freelancers"})
    }

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
    const { password , password2 } = this.state;
    const myid = localStorage.getItem('myid');

    const reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
   
  
    if( myid == 1){
     var  roles = "1"
    }else if ( myid == 2){
      var roles =  "2"
    } 

    if( password !== password2){
      this.setState({
        ...this.state,
        clientError:'confirmPasword',
        errors:'',
       
      })
    }
    else if  ( !reg.test(password)){
      this.setState({clientError:'password length', errors:'' });

    }

    else{
      const register = {
        first_name:this.state.fullName,
        username:this.state.email,
        password: this.state.password,
        roles
       
      };
      console.log(register)
      this.props.registerUser(register, this.props.history) 
      this.setState({
        clientError:''
      });  
    }
    
  }

  render() {

    const {clientError , errors } = this.state;
    console.log('err',errors)
    return (
       
        
        <div className="front-bg">
          {(clientError === 'password length') && (
              <div className="NextError" > Password must be at least 8 Characters long with one capital letter , one small and one digit atleast<span></span></div>
          )}

          {(clientError === 'confirmPasword') && (
              <div className="NextError" > Entered passwords don’t match. Please enter again<span></span></div>
          )}
          

        <div className="left-side bg-gradiaent">
          <div className="fr-logo">
            <img src={logo} alt=""/>
            <h2>FREELANCER</h2>
          </div>

          <form  onSubmit={this.onSubmit}>
             <div className="form-group" >
                <img src={userIcon} alt =""/>
                <input required type="text"  name="fullName" placeholder="Full Name" value={this.state.fullName} onChange={this.onChange}/>
                
              </div>

              <div className="form-group" >
                <img src={userIcon} alt =""/>
                <input required type="email" name="email" className={classnames({'is-invalid':errors.username})}placeholder="Email Id " value={this.state.email} onChange={this.onChange}/>
                {errors.username &&  (
                    <div className="invalid-feedback">{errors.username}</div>
                )}
              </div>

              <div className="form-group">
                <img src={lockIcon} alt=""/>
                <input required type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
              </div>

              <div className="form-group">
                <img src={lockIcon} alt=""/>
                <input required type="password" name="password2" placeholder="Confirm Password" value={this.state.password2} onChange={this.onChange}/>
              </div>
             

              <button className="login-btn" type="submit">
                Sign Up
              </button>

              <button className="facebook-btn" type="submit">
                Login via Facebook
              </button>
          </form>

          <p>
           Have Already Account. <Link to="/login">Log In</Link>
          </p>
        </div>
        <div className="right-side">
          <div className="hd-wrap">
              {
               <div className="hero-app bounce-animate">
                <div className="CheckContent">{this.state.msg}</div>
                <img className="img1 vert-move" src={this.state.content} alt=""/>
              </div>
              }
           
          </div>
        </div>
      </div>

      

    );
  }
}
const mapStateToProps = state => ({
  errors: state.errors
});


export default connect(mapStateToProps, {registerUser})(withRouter(Register));
