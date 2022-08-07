import React, { Component } from 'react';
import '../../css/header.css';
import '../../css/themenew.css';
import graf1 from '../../images/Landing/graf1.png';
import graf2 from  '../../images/Landing/graf2.png';
import graf3 from  '../../images/Landing/graf3.png';
import  graf4 from '../../images/Landing/graf4.png';
import graf5 from '../../images/Landing/graf5.png';
import  graf6 from '../../images/Landing/graf6.png';

import pl from  '../../images/Landing/pl.png';
import poly0 from  '../../images/Landing/poly0.png';
import  poly3 from '../../images/Landing/poly3.png';
import  poly6 from '../../images/Landing/poly6.png';
import right from '../../images/Landing/right.png';
import wrong from  '../../images/Landing/wrong.png';

import { Link}  from 'react-router-dom';


export default class Platform extends Component {
  render() {
    return (


      <div>

                <div>
                    <div className="navigation-wrap bg-light start-header start-style" style={{position: "fixed"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="navbar navbar-expand-md navbar-light">
                                
                                    <a className="navbar-brand" href="https://themeforest.net/user/ig_design/portfolio" target="_blank"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/logo.svg" alt="" /></a>    
                                    
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto py-4 py-md-0">
                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                                                <Link to ="solutions" className="nav-link dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">Solutions</Link>
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
                                                <Link to ="/RegisterLanding" className="nav-link">Sign in</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>      
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            <div className="container">
              <div className="header-down1">
                    
                      <h1 style={{color: "#143361"}}>
                          Plateform
                      </h1>
                      <h1 className="topp-h1">
                          Difference
                      </h1>
                      <h4 className="topp-h4">
                          We have completely reimagined the development Process to give you a service you can trust every time
                      </h4>
                  </div>
                  <div className="im-pl">
                      <img src={ pl } />
                  </div>
                  <div className="row">
                          <div className="col-md-3">
                              <div className="card2">
                                  <div className="img-3">
                                      <img src={ poly6 } />
                                  </div>
                                  <div className="line-blue"></div>
                                  <p className="p-p-2">UI/UX Enhancement</p>
                                  <p className="p-p-3">Dolores eos qui ration</p>
                              </div>
                          </div>
                      <div className="col-md-3">
                              <div className="card2">
                                  <div className="img-3">
                                      <img src={ poly0 } />
                                  </div>
                                  <div className="line-blue"></div>
                                  <p className="p-p-2">UI/UX Enhancement</p>
                                  <p className="p-p-3">Dolores eos qui ration</p>
                              </div>
                          </div>
                      <div className="col-md-3">
                              <div className="card2">
                                  <div className="img-3">
                                      <img src={poly3 } />
                                  </div>
                                  <div className="line-blue"></div>
                                  <p className="p-p-2">UI/UX Enhancement</p>
                                  <p className="p-p-3">Dolores eos qui ration</p>
                              </div>
                          </div>
                      <div className="col-md-3">
                              <div className="card2">
                                  <div className="img-3">
                                      <img src={ poly6 }/>
                                  </div>
                                  <div className="line-blue"></div>
                                  <p className="p-p-2">UI/UX Enhancement</p>
                                  <p className="p-p-3">Dolores eos qui ration</p>
                              </div>
                          </div>
                  </div>


                  <div className="row" style={{margintop: "40px"}}>
                          <div className="col-md-3">
                              <div className="card2">
                                  <div className="img-3">
                                      <img src={poly6}/>
                                  </div>
                                  <div className="line-blue"></div>
                                  <p className="p-p-2">UI/UX Enhancement</p>
                                  <p className="p-p-3">Dolores eos qui ration</p>
                              </div>
                          </div>
                      <div className="col-md-3">
                              <div className="card2">
                                  <div className="img-3">
                                      <img src={poly0} />
                                  </div>
                                  <div className="line-blue"></div>
                                  <p className="p-p-2">UI/UX Enhancement</p>
                                  <p className="p-p-3">Dolores eos qui ration</p>
                              </div>
                          </div>
                      <div className="col-md-3">
                              <div className="card2">
                                  <div className="img-3">
                                      <img src={ poly0}/>
                                  </div>
                                  <div className="line-blue"></div>
                                  <p className="p-p-2">UI/UX Enhancement</p>
                                  <p className="p-p-3">Dolores eos qui ration</p>
                              </div>
                          </div>
                      <div className="col-md-3">
                              <div className="card2">
                                  <div className="img-3">
                                      <img src={poly6} />
                                  </div>
                                  <div className="line-blue"></div>
                                  <p className="p-p-2">UI/UX Enhancement</p>
                                  <p className="p-p-3">Dolores eos qui ration</p>
                              </div>
                          </div>
                  </div>


                  <div className="container">
                      <div className="row">
                          <div className="col-md-5">
                              <div className="real-imp">
                                  <p className="re-p">REAL IMPACT</p>
                                  <h5 className="real-h5">Realivility</h5>
                                  <p className="real-m-discrive">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                  </p>
                              </div>
                          </div>
                          
                      </div>
                      <div className="row">
                          <div className="col-md-4">
                              <h3 className="real-percent">9.3</h3>
                              <p className="real-p-dis">Customer Satifiection</p>
                              <div className="im-graf">
                                  <img src={graf1} />
                              </div>
                          </div>
                          <div className="col-md-4">
                              <h3 className="real-percent">9.3</h3>
                              <p className="real-p-dis">Customer Satifiection</p>
                              <div className="im-graf">
                                  <img src={graf2} />
                              </div>
                          </div>
                          <div className="col-md-4">
                              <h3 className="real-percent">9.3</h3>
                              <p className="real-p-dis">Customer Satifiection</p>
                              <div className="im-graf">
                                  <img src={graf3}/>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-5">
                              <div className="real-imp">
                                
                                  <h5 className="real-h5">Realivility</h5>
                                  <p className="real-m-discrive">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                  </p>
                              </div>
                          </div>
                          
                      </div>
                      <div className="row">
                          <div className="col-md-4">
                              <h3 className="real-percent">9.3</h3>
                              <p className="real-p-dis">Customer Satifiection</p>
                              <div className="im-graf">
                                  <img src={graf4}/>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <h3 className="real-percent">9.3</h3>
                              <p className="real-p-dis">Customer Satifiection</p>
                              <div className="im-graf">
                                  <img src={graf5} />
                              </div>
                          </div>
                          <div className="col-md-4">
                              <h3 className="real-percent">9.3</h3>
                              <p className="real-p-dis">Customer Satifiection</p>
                              <div className="im-graf">
                                  <img src={graf6} />
                              </div>
                          </div>
                      </div>
                  </div>
                <hr />

                  <div className="card-body">
                          <table className="dbkit-table">
                              <tbody>
                                  <tr className="heading-td">
                                  <td className="mv-icon" style={{color: "green",fontweight: "800"}}>Criteria</td>
                                  <td className="coin-name">Gigster</td>
                                  <td className="buy">Employement</td>
                                  <td className="sell">System Integration</td>
                              </tr>
                              <tr>
                                  <td className="mv-icon">Start Project</td>
                                  <td className="coin-name">LiteCoin</td>
                                  <td className="buy">30% <img src={ right } alt="icon" /></td>
                                  <td className="sell">20%  <img src={ wrong } alt="icon" /></td>
                              </tr>
                              <tr>
                                  <td className="mv-icon">Recruiting Fee</td>
                                  <td className="coin-name">LiteCoin</td>
                                  <td className="buy">30% <img src={right} alt="icon" /></td>
                                  <td className="sell">20% <img src={ wrong } alt="icon" /></td>
                              </tr>
                              <tr>
                                  <td className="mv-icon">Guaranteed Quality</td>
                                  <td className="coin-name">LiteCoin</td>
                                  <td className="buy">30% <img src={ right} alt="icon" /></td>
                                  <td className="sell">20% <img src={ wrong } alt="icon" /></td>
                              </tr>
                            <tr>
                                  <td className="mv-icon">Failure Rate</td>
                                  <td className="coin-name">LiteCoin</td>
                                  <td className="buy">30% <img src={ right} alt="icon" /></td>
                                  <td className="sell">20% <img src={ wrong } alt="icon" /></td>
                              </tr>
                              <tr>
                                  <td className="mv-icon">Prescreening</td>
                                  <td className="coin-name">LiteCoin</td>
                                  <td className="buy">30% <img src={ right } alt="icon" /></td>
                                  <td className="sell">20% <img src={ wrong} alt="icon" /></td>
                              </tr>
                              <tr>
                                  <td className="mv-icon">TerminationCosts</td>
                                  <td className="coin-name">LiteCoin</td>
                                  <td className="buy">30% <img src={ right} alt="icon" /></td>
                                  <td className="sell">20% <img src={ wrong } alt="icon" /></td>
                              </tr>
                          </tbody>
                      </table>              
              </div>
              <hr />
          </div>
      </div>
    )
  }
}
