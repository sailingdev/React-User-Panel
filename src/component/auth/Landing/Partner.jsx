import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/themenew.css';
import '../../css/header.css';
import world from '../../images/Landing/world.png';
import card1 from '../../images/Landing/card-1.png';
import card2 from '../../images/Landing/card2.png';
import card3 from '../../images/Landing/card3.png';
import quality from '../../images/Landing/quality.png';

export default class Partner extends Component {
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
                                          <Link to ="/solutions" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Solutions</Link>
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
                                          <a className="nav-link" href="#">Become a Partner</a>
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
                                          <Link to ="/RegisterLanding" className="nav-link" >Sign in</Link>
                                      </li>
                                  </ul>
                              </div>
                          </nav>      
                      </div>
                  </div>
              </div>
          </div>


           
        <div className="container">
            <div className="headings-top" style={{textalign: "center"}}>
              <h1 className="top-h1">
                          Become a Partner
              </h1>
              <h2 className="top-h2">
                          Gigster Talent Network
                      </h2>
              <h4 className="top-h4">
                          Our accomplished Gigsters work togather to creat beatiful,functional software
              </h4>
              <h3 className="top-h3">
                          An
                <span className="">Invite-only</span>
                          network of world-className developers,designers,and product managers
                      
              </h3>
            </div>
          <div className="worls-img">
            <img style={{width: "100%"}} src={ world } />
          </div>
          <div className="container">
            <div className="center-1">
              <div className="row">
                <div className="col-md-3">
                  <p className="p-details">us</p>
                  <p className="p-prcent" style={{color: "#5cd2ef"}}>70%</p>
                </div>
                <div className="col-md-3">
                  <p className="p-details">Western us</p>
                  <p className="p-prcent" style={{color: "#ee5d42"}}>15%</p>
                </div>
                <div className="col-md-3">
                  <p className="p-details">Others</p>
                <p className="p-prcent"style={{color: "#408cee"}}>15%</p>
                </div>
                <div className="col-md-3">
                  <p className="p-details" >Contries</p>
                  <p className="p-prcent" style={{ color: "#77da9b"}}>42%</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="2-snap">
              <div className="center-1">
                <p className="p-details">snapshot</p>
                <div className="row">
                  <div className="col-md-4">
                    <p className="p-plus" style={{color: "#5cd2ef"}}>400+</p>
                    <p className="p-details1" style={{color: "#5cd2ef"}}>Developers</p>
                  </div>
                  <div className="col-md-4">
                    <p className="p-plus" style={{color: "#ee5d42"}}>200+</p>
                    <p className="p-details1" style={{color: "#ee5d42"}}>Project Managers</p>
                  </div>
                  <div className="col-md-4">
                    <p className="p-plus" style={{color: "#408cee"}}>100+</p>
                    <p className="p-details1" style={{color: "#408cee"}}>Designers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-down1" style={{margin: "100px"}}>
              <h1>
                        Why Join-Us
                    </h1>
            </div>
            <div className="container">
              <div className="row centr">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card card-1">
                        <div className="top-section">
                          <div className="circular-border">
                            <img src={card1}/>
                          </div>
                        </div>
                        <h2 className="h2-project1" >Project From Arround the world</h2>
                        <p className="p-project1-details1" >Stop spending your time nutering ,closing,and onboarding clients,and let indiezer do it all for you with our network of global client, you will get to foccus on what do you best</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card card-1">
                        <div className="top-section">
                          <div className="circular-border">
                            <img src={card2} />
                          </div>
                        </div>
                        <h2 className="h2-project1">Project From Arround the world</h2>
                        <p className="p-project1-details1" >Stop spending your time nutering ,closing,and onboarding clients,and let indiezer do it all for you with our network of global client, you will get to foccus on what do you best</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card card-1">
                        <div className="top-section">
                          <div className="circular-border">
                            <img src={ card3 } />
                          </div>
                        </div>
                        <h2 className="h2-project1" >Project From Arround the world</h2>
                        <p className="p-project1-details1" >Stop spending your time nutering ,closing,and onboarding clients,and let indiezer do it all for you with our network of global client, you will get to foccus on what do you best</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-down1" style={{margin: "100px"}}>
            <h1>
                        highest Quality Talant
                    </h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="main-tallent">
                  <div className="row row-set">
                    <div className="col-md-2">
                      <div className="point-1">
                        <p>01</p>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <h5 className="tallent-heading">
                                Langueges & Prsonality
                            </h5>
                      <p className="d-t-point">Stop spending your time nutering ,closing,and onboarding clients,and let indiezer do it all for you with our network of global client, you will get to foccus on what do you best</p>
                    </div>
                  </div>
                </div>
                <div className="main-tallent">
                  <div className="row row-set">
                    <div className="col-md-2">
                      <div className="point-1">
                        <p>02</p>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <h5 className="tallent-heading">
                                Langueges & Prsonality
                            </h5>
                      <p className="d-t-point">Stop spending your time nutering ,closing,and onboarding clients,and let indiezer do it all for you with our network of global client, you will get to foccus on what do you best</p>
                    </div>
                  </div>
                </div>
                <div className="main-tallent">
                  <div className="row row-set">
                    <div className="col-md-2">
                      <div className="point-1">
                        <p>03</p>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <h5 className="tallent-heading">
                                Langueges & Prsonality
                            </h5>
                      <p className="d-t-point">Stop spending your time nutering ,closing,and onboarding clients,and let indiezer do it all for you with our network of global client, you will get to foccus on what do you best</p>
                    </div>
                  </div>
                </div>
                <div className="main-tallent">
                  <div className="row row-set">
                    <div className="col-md-2">
                      <div className="point-1">
                        <p>04</p>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <h5 className="tallent-heading">
                                Langueges & Prsonality
                            </h5>
                      <p className="d-t-point">Stop spending your time nutering ,closing,and onboarding clients,and let indiezer do it all for you with our network of global client, you will get to foccus on what do you best</p>
                    </div>
                  </div>
                </div>
                <div className="main-tallent">
                  <div className="row row-set">
                    <div className="col-md-2">
                      <div className="point-1">
                        <p>05</p>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <h5 className="tallent-heading">
                                Langueges & Prsonality
                            </h5>
                      <p className="d-t-point"> Stop spending your time nutering ,closing,and onboarding clients,and let indiezer do it all for you with our network of global client, you will get to foccus on what do you best</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="img-quality">
                  <img src={ quality} />
                    <h3 className="h3-color" >
                                  The Top 3%
                                </h3>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="main-tallent-right">
                    <h5 className="set-t-h3">26.5% OF</h5>
                    <p className="set-t-p1"> Applicant Pass</p>
                  </div>
                  <div className="main-tallent-right">
                    <h5 className="set-t-h3">26.5% OF</h5>
                    <p className="set-t-p1"> Applicant Pass</p>
                  </div>
                  <div className="main-tallent-right">
                    <h5 className="set-t-h3">26.5% OF</h5>
                    <p className="set-t-p1"> Applicant Pass</p>
                  </div>
                  <div className="main-tallent-right">
                    <h5 className="set-t-h3">26.5% OF</h5>
                    <p className="set-t-p1"> Applicant Pass</p>
                  </div>
                  <div className="main-tallent-right">
                    <h5 className="set-t-h3">26.5% OF</h5>
                    <p className="set-t-p1"> Applicant Pass</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
