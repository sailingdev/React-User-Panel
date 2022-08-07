import React, { Component } from 'react';
import { Link } from 'react-router-dom';



import './mdi-font/css/material-design-iconic-font.min.css';
import './font-awesome-4.7/css/font-awesome.min.css';
import bg from './images/bg-title-01.jpg';
import bg2 from './images/bg-title-02.jpg';
import avatar2 from './images/icon/avatar-01.jpg';
import avatar1 from './images/icon/avatar-03.jpg';
import avatar4 from './images/icon/avatar-04.jpg';
import avatar5 from './images/icon/avatar-05.jpg';
import lv from '../DeveloperDashborad/images/icon/logo-blue.png';
import logo from './images/lg.svg';
import './chat.css';
import './css/theme.css';




export default class ChatBox extends Component {
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
                  <li className="has-sub">
                    <a className="js-arrow" href="#">
                      <i className="fas fa-tachometer-alt"></i>Dashboard</a>

                  </li>
                  <li>
                    <Link to ='/developer/project' style={{color:"#4272d7"}}>
                      <i className="fa fa-comment" ></i>Projects</Link>
                  </li>
                  <li>
                    <Link to ='/developer/chat'>
                      <i className="fas fa-chart-bar"></i>Massage</Link>
                  </li>
                  <li>
                    <a href="shedule.html">
                      <i className="fas fa-chart-bar"></i>Shedule</a>
                  </li>
                  <li>
                    <a href="team.html">
                      <i className="fas fa-chart-bar"></i>Team</a>
                  </li>
                  <li>
                    <a href="setting.html">
                      <i className="fas fa-chart-bar"></i>Setting</a>
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

                  <li >
                    <Link to ='/developer/project' className="js-arrow" >
                      <i className="fa fa-chart-bar"></i>Projects</Link>
                  </li>
                  <li className=" active has-sub">
                    <Link to ='/developer/chat'>
                      <i className="fa fa-comment" ></i>Massage</Link>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-chart-bar"></i>Shedule</a>
                  </li>
                  <li>
                    <Link to="/developer/team" >
                      <i className="fas fa-chart-bar"></i>Team</Link>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-chart-bar"></i>Setting</a>
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
                            <img src={ avatar2 } alt="John Doe" />
                          </div>
                          <div className="content">
                            <a className="js-acc-btn" href="#">john doe</a>
                          </div>
                          <div className="account-dropdown js-dropdown">
                            <div className="info clearfix">
                              <div className="image">
                                <a href="#">
                                  <img src={ avatar2 } alt="John Doe" />
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
                    <div className="col-lg-6">
                      <div className="au-card au-card--no-shadow au-card--no-pad m-b-40">
                        <div className="au-card-title" img={ bg}>
                          <div className="bg-overlay bg-overlay--blue"></div>
                          <h3>
                            <i className="zmdi zmdi-account-calendar"></i>26 April, 2018</h3>
                          <button className="au-btn-plus">
                            <i className="zmdi zmdi-plus"></i>
                          </button>
                        </div>
                        <div className="au-task js-list-load">
                          <div className="au-task__title">
                            <p>Tasks for John Doe</p>
                          </div>
                          <div className="au-task-list js-scrollbar3">
                            <div className="au-task__item au-task__item--danger">
                              <div className="au-task__item-inner">
                                <h5 className="task">
                                  <a href="#">Meeting about plan for Admin Template 2018</a>
                                </h5>
                                <span className="time">10:00 AM</span>
                              </div>
                            </div>
                            <div className="au-task__item au-task__item--warning">
                              <div className="au-task__item-inner">
                                <h5 className="task">
                                  <a href="#">Create new task for Dashboard</a>
                                </h5>
                                <span className="time">11:00 AM</span>
                              </div>
                            </div>
                            <div className="au-task__item au-task__item--primary">
                              <div className="au-task__item-inner">
                                <h5 className="task">
                                  <a href="#">Meeting about plan for Admin Template 2018</a>
                                </h5>
                                <span className="time">02:00 PM</span>
                              </div>
                            </div>
                            <div className="au-task__item au-task__item--success">
                              <div className="au-task__item-inner">
                                <h5 className="task">
                                  <a href="#">Create new task for Dashboard</a>
                                </h5>
                                <span className="time">03:30 PM</span>
                              </div>
                            </div>
                            <div className="au-task__item au-task__item--danger js-load-item" style={{display: "none"}}>
                              <div className="au-task__item-inner">
                                <h5 className="task">
                                  <a href="#">Meeting about plan for Admin Template 2018</a>
                                </h5>
                                <span className="time">10:00 AM</span>
                              </div>
                            </div>
                            <div className="au-task__item au-task__item--warning js-load-item"  style={{display: "none"}}>
                              <div className="au-task__item-inner">
                                <h5 className="task">
                                  <a href="#">Create new task for Dashboard</a>
                                </h5>
                                <span className="time">11:00 AM</span>
                              </div>
                            </div>
                          </div>
                          <div className="au-task__footer">
                            <button className="au-btn au-btn-load js-load-btn">load more</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="au-card au-card--no-shadow au-card--no-pad m-b-40">
                        <div className="au-card-title" img={bg2}>
                          <div className="bg-overlay bg-overlay--blue"></div>
                          <h3>
                            <i className="zmdi zmdi-comment-text"></i>New Messages</h3>
                          <button className="au-btn-plus">
                            <i className="zmdi zmdi-plus"></i>
                          </button>
                        </div>
                        <div className="au-inbox-wrap js-inbox-wrap">
                          <div className="au-message js-list-load">
                            <div className="au-message__noti">
                              <p>You Have
                                                    <span>2</span>

                                new messages
                                                </p>
                            </div>
                            <div className="au-message-list">
                              <div className="au-message__item unread">
                                <div className="au-message__item-inner">
                                  <div className="au-message__item-text">
                                    <div className="avatar-wrap">
                                      <div className="avatar">
                                        <img src={  avatar1 } alt="John Smith"/>
                                                                </div>
                                      </div>
                                      <div className="text">
                                        <h5 className="name">John Smith</h5>
                                        <p>Have sent a photo</p>
                                      </div>
                                    </div>
                                    <div className="au-message__item-time">
                                      <span>12 Min ago</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="au-message__item unread">
                                  <div className="au-message__item-inner">
                                    <div className="au-message__item-text">
                                      <div className="avatar-wrap online">
                                        <div className="avatar">
                                          <img src={ avatar1 } alt="Nicholas Martinez" />
                                                                </div>
                                        </div>
                                        <div className="text">
                                          <h5 className="name">Nicholas Martinez</h5>
                                          <p>You are now connected on message</p>
                                        </div>
                                      </div>
                                      <div className="au-message__item-time">
                                        <span>11:00 PM</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="au-message__item">
                                    <div className="au-message__item-inner">
                                      <div className="au-message__item-text">
                                        <div className="avatar-wrap online">
                                          <div className="avatar">
                                            <img src={ avatar4 } alt="Michelle Sims" />
                                                                </div>
                                          </div>
                                          <div className="text">
                                            <h5 className="name">Michelle Sims</h5>
                                            <p>Lorem ipsum dolor sit amet</p>
                                          </div>
                                        </div>
                                        <div className="au-message__item-time">
                                          <span>Yesterday</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="au-message__item">
                                      <div className="au-message__item-inner">
                                        <div className="au-message__item-text">
                                          <div className="avatar-wrap">
                                            <div className="avatar">
                                              <img src={ avatar4 } alt="Michelle Sims" />
                                                                </div>
                                            </div>
                                            <div className="text">
                                              <h5 className="name">Michelle Sims</h5>
                                              <p>Purus feugiat finibus</p>
                                            </div>
                                          </div>
                                          <div className="au-message__item-time">
                                            <span>Sunday</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="au-message__item js-load-item"   style={{display: "none"}}>
                                        <div className="au-message__item-inner">
                                          <div className="au-message__item-text">
                                            <div className="avatar-wrap online">
                                              <div className="avatar">
                                                <img src={ avatar4 } alt="Michelle Sims" />
                                                                </div>
                                              </div>
                                              <div className="text">
                                                <h5 className="name">Michelle Sims</h5>
                                                <p>Lorem ipsum dolor sit amet</p>
                                              </div>
                                            </div>
                                            <div className="au-message__item-time">
                                              <span>Yesterday</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="au-message__item js-load-item" style={{display: "none"}}>
                                          <div className="au-message__item-inner">
                                            <div className="au-message__item-text">
                                              <div className="avatar-wrap">
                                                <div className="avatar">
                                                  <img src={ avatar5 } alt="Michelle Sims" />
                                                                </div>
                                                </div>
                                                <div className="text">
                                                  <h5 className="name">Michelle Sims</h5>
                                                  <p>Purus feugiat finibus</p>
                                                </div>
                                              </div>
                                              <div className="au-message__item-time">
                                                <span>Sunday</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="au-message__footer">
                                          <button className="au-btn au-btn-load js-load-btn">load more</button>
                                        </div>
                                      </div>
                                      <div className="au-chat">
                                        <div className="au-chat__title">
                                          <div className="au-chat-info">
                                            <div className="avatar-wrap online">
                                              <div className="avatar avatar--small">
                                                <img src={ avatar4 } alt="John Smith" />
                                                        </div>
                                              </div>
                                              <span className="nick">
                                                <a href="#">John Smith</a>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="au-chat__content">
                                            <div className="recei-mess-wrap">
                                              <span className="mess-time">12 Min ago</span>
                                              <div className="recei-mess__inner">
                                                <div className="avatar avatar--tiny">
                                                  <img src={ avatar4 } alt="John Smith" />
                                                        </div>
                                                  <div className="recei-mess-list">
                                                    <div className="recei-mess">Lorem ipsum dolor sit amet, consectetur adipiscing elit non iaculis</div>
                                                    <div className="recei-mess">Donec tempor, sapien ac viverra</div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="send-mess-wrap">
                                                <span className="mess-time">30 Sec ago</span>
                                                <div className="send-mess__inner">
                                                  <div className="send-mess-list">
                                                    <div className="send-mess">Lorem ipsum dolor sit amet, consectetur adipiscing elit non iaculis</div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="au-chat-textfield">
                                              <form className="au-form-icon">
                                                <input className="au-input au-input--full au-input--h65" type="text" placeholder="Type a message" />
                                                  <button className="au-input-icon">
                                                    <i className="zmdi zmdi-camera"></i>
                                                  </button>
                                                </form>
                                            </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="au-card au-card--no-shadow au-card--no--pad m-b-40 au-card--border">
                                          <div className="au-card-title" >
                                            <div className="bg-overlay bg-overlay--blue"></div>
                                            <h3><i className="zmdi zmdi-comment-text"></i>Chat</h3>
                                            <button className="au-btn-plus">
                                              <i className="zmdi zmdi-plus"></i>
                                            </button>
                                          </div>
                                          <div className="au-inbox-wrap">
                                            <div className="au-chat au-chat--border">
                                              <div className="au-chat__title">
                                                <div className="au-chat-info">
                                                  <div className="avatar-wrap online">
                                                    <div className="avatar avatar--small">
                                                      <img src={ bg2 } alt="John Smith" />
                                                        </div>
                                                    </div>
                                                    <span className="nick">
                                                      <a href="#">John Smith</a>
                                                    </span>
                                                  </div>
                                                </div>
                                                <div className="au-chat__content au-chat__content2 js-scrollbar5">
                                                  <div className="recei-mess-wrap">
                                                    <span className="mess-time">12 Min ago</span>
                                                    <div className="recei-mess__inner">
                                                      <div className="avatar avatar--tiny">
                                                        <img src={ avatar4 } alt="John Smith" />
                                                        </div>
                                                        <div className="recei-mess-list">
                                                          <div className="recei-mess">Lorem ipsum dolor sit amet elit</div>
                                                          <div className="recei-mess">Donec tempor viverra</div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="send-mess-wrap">
                                                      <span className="mess-time">30 Sec ago</span>
                                                      <div className="send-mess__inner">
                                                        <div className="send-mess-list">
                                                          <div className="send-mess">Lorem ipsum dolor sit amet elit</div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="au-chat-textfield">
                                                        <form className="au-form-icon">
                                                          <input className="au-input au-input--full au-input--h65" type="text" placeholder="Type a message" />
                                                          <button className="au-input-icon">
                                                            <i className="zmdi zmdi-camera"></i>
                                                          </button>
                                                        </form>
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
                                </div>
    )
  }
}
