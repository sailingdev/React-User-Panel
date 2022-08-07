import React,{ Component } from 'react';
import './project.css';
import './css/theme.css';
import Content from './content'

import LogoImage from './images/lg.svg';
import avatar from './images/icon/avatar-01.jpg';
import { Link } from 'react-router-dom';
import './font-awesome-4.7/css/font-awesome.min.css';
import './mdi-font/css/material-design-iconic-font.min.css';
import { Dropdown, Navbar,NavDropdown ,Nav, Form,FormControl,Button,Tabs, Tab} from 'react-bootstrap';

class Project extends Component{
  constructor(props) {
    super(props);
    this.state = {
      key: 1
    };
    
  }


  handleSelect(key) {
    console.log('selected' + key);
    this.setState({ key: key });
  }

  render(){
    
    return(
     
      <div className="animsition">
        <div className="page-wrapper">
          
         
          
          <aside className="menu-sidebar d-none d-lg-block">
            <div className="logo">
              <a href="#">
                <img className="logowidth" src={ LogoImage} alt="dss" />
              </a>
            </div>
            <div className="menu-sidebar__content js-scrollbar1">
              <nav className="navbar-sidebar">
                <ul className="list-unstyled navbar__list">

                  <li className=" active has-sub">
                    <Link to ='/developer/project' className="js-arrow" >
                      <i className="fa fa-chart-bar"></i>Projects</Link>
                  </li>
                  <li>
                   <Link to="/developer/chat"><i className="fa fa-comment" ></i>Message</Link>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-chart-bar"></i>Shedule</a>
                  </li>
                  <li>
                    <Link to ='/developer/team' >
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


                      {/* <div className="account-wrap">
                        <div className="account-item clearfix js-item-menu">
                          <div className="image">
                            <img src={avatar} alt="John Doe" />
                          </div>
                          <div className="content">
                            <a className="js-acc-btn" href="#">john doe</a>
                          </div>
                          <div className="account-dropdown js-dropdown">
                            <div className="info clearfix">
                              <div className="image">
                                <a href="#">
                                  <img src={avatar} alt="John Doe" />
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
                      </div> */}
                      <div className="account-wrap">
                        <div className="account-item clearfix js-item-menu">
                             
                              <Dropdown>
                                <div className="image">
                                 <Link to='/profile'> <img src={avatar} alt="John Doe" /></Link>
                                </div>
                                <Dropdown.Toggle variant={"Primary"}  id="dropdown-basic">
                                  John Deo
                                </Dropdown.Toggle>

                                <Dropdown.Menu>

                                  
                                 
                                  <div className="account-dropdown__item">
                                  <a href="#">
                                    <i className="zmdi zmdi-money-box"></i>Billing</a>
                                  </div>
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
                                
                                  <div className="account-dropdown__footer">

                                      <i className="zmdi zmdi-power"></i>
                                      <button  className="" 
                                        onClick ={()=>{ localStorage.removeItem("jwtToken");
                                          window.location.href = "/login"	}}>Log out
                                      </button>
                                  </div> 
                                </Dropdown.Menu>
                              </Dropdown>
                        </div>
                      </div>

                     
                      
                    
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="main-content">

              <div className="section__content section__content--p30">
                <div className="card-body">
                  <h1 className="hd-pr-1">Dashboard</h1>
                  {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active show"data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Active Projects</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"  data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Complete Projects</a>
                    </li>
                  </ul> */}
                  <div  >
                    <Tabs activeKey={this.state.key} onSelect={this.handleSelect.bind(this)} id="controlled-tab-example" >
                      <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
                      <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
                      <Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>
                    </Tabs>
                    {/* <div className="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div className="section__content section__content--p30" >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="card">
                                <div className="Dropdown-title-1">
                                  <i className="fa fa-ellipsis-h"></i>
                                </div>
                                <div className="row">
                                  <div className="col-md-3">
                                    <div className="image iim">
                                      <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                    </div>
                                    <div className="col-md-9">
                                      <div className="card-cont">
                                        <h5 className="h3-name">Swappco</h5>
                                        <strong className="str">React JS Developer</strong>
                                        <p className="p-p">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div className="ch-1">
                                          <div className="progress mb-3">
                                            <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" ></div>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <button type="button" className="btn btn-secondary btn-sm">
                                              <i className="fa fa-clock-o"></i>&nbsp; Seco</button>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="image i11">
                                              <img src="#" alt="John Doe" />
                                              <img src="#" alt="John Doe" />
                                              <img src="#" alt="John Doe" />
                                              <img src="#" alt="John Doe" />
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

                      <div className="tab-pane fade"  aria-labelledby="profile-tab">
                        <div className=" sectisection__contenton__content--p30" >
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="card">
                                  <div className="Dropdown-title-1">
                                    <i className="fa fa-ellipsis-h"></i>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-3">
                                      <div className="image iim">
                                        <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                      </div>
                                    </div>
                                    <div className="col-md-9">
                                      <div className="card-cont">
                                        <h5 className="h3-name">Swappco</h5>
                                        <strong className="str">Mern Stack Developer </strong>
                                        <p className="p-p">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div className="ch-1">
                                          <div className="progress mb-3">
                                            <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" ></div>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <button type="button" className="btn btn-secondary btn-sm">
                                              <i className="fa fa-clock-o"></i>&nbsp; Seco</button>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="image i11">
                                              <img src="images/icon/avatar-01.jpg" alt="John Doe"  />
                                              <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                              <img src="images/icon/avatar-01.jpg" alt="John Doe"  />
                                              <img src="images/icon/avatar-01.jpg" alt="John Doe"/>
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

                    </div> */}
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

export default Project;