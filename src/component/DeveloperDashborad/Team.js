import React, { Component } from 'react';
import { Link  } from 'react-router-dom';

import iconImage from './images/icon/avatar-big-01.jpg';
import logo  from './images/lg.svg';
import './team.css';
import './css/theme.css';
import './font-awesome-4.7/css/font-awesome.min.css';
import './mdi-font/css/material-design-iconic-font.min.css';


export default class Team extends Component {

  render() {
    return (

      <div className="animsition">
        <div className="page-wrapper">

          <header className="header-mobile d-block d-lg-none">
            <div className="header-mobile__bar">
              <div className="container-fluid">
                <div className="header-mobile-inner">
                  <a className="logo" href="index.html">
                    <img className="logowidth" src={ logo } alt="CoolAdmin" />
                  </a>
                  <button className="hamburger hamburger--slider" type="button">
                    <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <nav className="navbar-mobile">
              <div className="container-fluid">
                <ul className="navbar-mobile__list list-unstyled">
                  <li>
                    <a className="js-arrow" href="#">
                      <i className="fa fa-tachometer-alt"></i>Dashboard</a>

                  </li>
                  <li>
                    <a href="Projects.html" style={{color:"#4272d7"}}>
                      <i className="fa fa-comment" ></i>Projects</a>
                  </li>
                  <li>
                    <a href="massage.html">
                      <i className="fa fa-chart-bar"></i>Massage</a>
                  </li>
                  <li className="has-sub">
                    <a href="shedule.html">
                      <i className="fa fa-chart-bar"></i>Shedule</a>
                  </li>
                  <li>
                    <a href="team.html">
                      <i className="fa fa-users"></i>Team</a>
                  </li>
                  <li >
                    <a href="setting.html">
                      <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>Setting</a>
                  </li>

                </ul>
              </div>
            </nav>
          </header>

          <aside className="menu-sidebar d-none d-lg-block">
            <div className="logo">
              <a href="#">
                <img className="logowidth" src={ logo } alt="CoolAdmin" />
              </a>
            </div>
            <div className="menu-sidebar__content js-scrollbar1">
              <nav className="navbar-sidebar">
                <ul className="list-unstyled navbar__list">

                  <li>
                    <Link to='/developer/project' className="js-arrow">
                      <i className="fa fa-chart-bar"></i>Projects</Link>
                  </li>
                  <li>
                    <Link to='/developer/chat'>
                      <i className="fa fa-comment" ></i>Message</Link>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-chart-bar"></i>Shedule</a>
                  </li>
                  <li className=" active has-sub">
                    <Link to="/developer/team"  >
                      <i className="fa fa-users"></i>Team</Link>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>Setting</a>
                  </li>

                </ul>
              </nav>
            </div>
          </aside>

          <div className="page-container">

            <header className="header-desktop">
              <div className="section__content section__content--p30">
                <div className="container-fluid">
                  <div className="header-wrap">

                    <div className="menu">
                      <ul className="hd-menu">
                        <li className="hd-submenu">
                          <a className="hd-link" href="">Menu-1</a>
                        </li>
                        <li className="hd-submenu">
                          <a className="hd-link" href="">Menu-2</a>
                        </li>

                        <li className="hd-submenu">
                          <a className="hd-link" href="">Menu-3</a>
                        </li>

                        <li className="hd-submenu">
                          <a className="hd-link" href="">Menu-4</a>
                        </li>

                      </ul>
                    </div>

                    <div className="header-button">
                      <div className="noti-wrap">

                        <div className="noti__item js-item-menu">
                          <i className="zmdi zmdi-notifications"></i>
                          <span className="quantity">3</span>
                          <div className="notifi-dropdown js-dropdown">
                            <div className="notifi__title">
                              <p>You have 3 Notifications</p>
                            </div>
                            <div className="notifi__item">
                              <div className="bg-c1 img-cir img-40">
                                <i className="zmdi zmdi-email-open"></i>
                              </div>
                              <div className="content">
                                <p>You got a email notification</p>
                                <span className="date">April 12, 2018 06:50</span>
                              </div>
                            </div>
                            <div className="notifi__item">
                              <div className="bg-c2 img-cir img-40">
                                <i className="zmdi zmdi-account-box"></i>
                              </div>
                              <div className="content">
                                <p>Your account has been blocked</p>
                                <span className="date">April 12, 2018 06:50</span>
                              </div>
                            </div>
                            <div className="notifi__item">
                              <div className="bg-c3 img-cir img-40">
                                <i className="zmdi zmdi-file-text"></i>
                              </div>
                              <div className="content">
                                <p>You got a new file</p>
                                <span className="date">April 12, 2018 06:50</span>
                              </div>
                            </div>
                            <div className="notifi__footer">
                              <a href="#">All notifications</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="account-wrap">
                        <div className="account-item clearfix js-item-menu">
                          <div className="image">
                            <img src={ iconImage } alt="John Doe" />
                          </div>
                          <div className="content">
                            <a className="js-acc-btn" href="#">john doe</a>
                          </div>
                          <div className="account-dropdown js-dropdown">
                            <div className="info clearfix">
                              <div className="image">
                                <a href="#">
                                  <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                </a>
                              </div>
                              <div className="content">
                                <h5 className="name">
                                  <a href="#">john doe</a>
                                </h5>
                                <span className="email">johndoe@example.com</span>
                              </div>
                            </div>
                            <div className="account-dropdown__body">
                              <div className="account-dropdown__item">
                                <a href="#">
                                  <i className="zmdi zmdi-account"></i>Account</a>
                              </div>
                              <div className="account-dropdown__item">
                                <a href="#">
                                  <i className="zmdi zmdi-settings"></i>Setting</a>
                              </div>
                              <div className="account-dropdown__item">
                                <a href="#">
                                  <i className="zmdi zmdi-money-box"></i>Billing</a>
                              </div>
                            </div>
                            <div className="account-dropdown__footer">
                              <a href="#">
                                <i className="zmdi zmdi-power"></i>Logout</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="main-content">

              <div className="section__content section__content--p30">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card profile-card-1">
                        <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" className="background" />
                        <img src={ iconImage } alt="profile-image" className="profile" />
                        <div className="card-content">
                          <h2>John Deo<small>Engineer</small></h2>
                          <div className="icon-block"><a href="#"><i className="fa fa-facebook"></i></a><a href="#">
                            <i className="fa fa-twitter"></i></a><a href="#"> <i className="fa fa-google-plus"></i></a>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-md-4">
                      <div className="card profile-card-1">
                        <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" className="background" />
                        <img src={ iconImage } alt="profile-image" className="profile" />
                        <div className="card-content">
                          <h2>John Deo<small>Engineer</small></h2>
                          <div className="icon-block"><a href="#"><i className="fa fa-facebook"></i></a><a href="#">
                            <i className="fa fa-twitter"></i></a><a href="#"> <i className="fa fa-google-plus"></i></a>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-md-4">
                      <div className="card profile-card-1">
                        <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" className="background" />
                        <img src={ iconImage } alt="profile-image" className="profile" />
                        <div className="card-content">
                          <h2>John Deo<small>Engineer</small></h2>
                          <div className="icon-block"><a href="#"><i className="fa fa-facebook"></i></a><a href="#">
                            <i className="fa fa-twitter"></i></a><a href="#"> <i className="fa fa-google-plus"></i></a>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-md-4">
                      <div className="card profile-card-1">
                        <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" className="background" />
                        <img src={ iconImage } alt="profile-image" className="profile" />
                        <div className="card-content">
                          <h2>John Deo<small>Engineer</small></h2>
                          <div className="icon-block"><a href="#"><i className="fa fa-facebook"></i></a><a href="#">
                            <i className="fa fa-twitter"></i></a><a href="#"> <i className="fa fa-google-plus"></i></a>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-md-4">
                      <div className="card profile-card-1">
                        <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" className="background" />
                        <img src={ iconImage } alt="profile-image" className="profile" />
                        <div className="card-content">
                          <h2>John Deo<small>Engineer</small></h2>
                          <div className="icon-block"><a href="#"><i className="fa fa-facebook"></i></a><a href="#">
                            <i className="fa fa-twitter"></i></a><a href="#"> <i className="fa fa-google-plus"></i></a>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-md-4">
                      <div className="card profile-card-1">
                        <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" className="background" />
                        <img src={ iconImage } alt="profile-image" className="profile" />
                        <div className="card-content">
                          <h2>John Deo<small>Engineer</small></h2>
                          <div className="icon-block"><a href="#"><i className="fa fa-facebook"></i></a><a href="#">
                            <i className="fa fa-twitter"></i></a><a href="#"> <i className="fa fa-google-plus"></i></a>
                          </div>
                        </div>
                      </div>

                    </div>


                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>


      </div>
    )
  }
}
