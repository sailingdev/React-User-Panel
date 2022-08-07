import React, { Component } from 'react';
import '../css/themenew.css';
import '../css/header.css';
import Solutions from '../auth/Solutions';

import { Link } from 'react-router-dom';


export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="navigation-wrap bg-light start-header start-style" style={{position: "fixed"}}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-md navbar-light">
                    
                        <Link to ="/solutions" className="navbar-brand" href="https://themeforest.net/user/ig_design/portfolio" target="_blank"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/logo.svg" alt="" /></Link>    
                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto py-4 py-md-0">
                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Solutions</a>
                                     <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                    </div> 
                                </li>
                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <Link to ="/platform" className="nav-link" >Platform</Link>
                                </li>
                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <Link to ="/partner" className="nav-link" href="#">Become a Partner</Link>
                                </li>
                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">About</a>
                                     <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                    </div> 
                                </li>
                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <Link to="/RegisterLanding" className="nav-link">Sign in</Link >
                                </li>
                            </ul>
                        </div>
                    </nav>      
                </div>
            </div>
        </div>
    </div>
        < Solutions/>
        
      </div>
    )
  }
}
