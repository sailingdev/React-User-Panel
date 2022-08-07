import React, { Component } from 'react';
import '../css/themenew.css';
import '../css/header.css';
import firstImage from '../images/Landing/1.png';
import SecondImage from '../images/Landing/2.png';
import ThirdImage from '../images/Landing/3.png';
import circle1 from '../images/Landing/circle1.png';
import circle2 from '../images/Landing/circle2.png';
import circle3 from '../images/Landing/circle3.png';
import web1 from '../images/Landing/web1.png';
import web2 from '../images/Landing/web2.png';
import web3 from '../images/Landing/web3.png';
import web4 from '../images/Landing/web4.png';
import web5 from '../images/Landing/web5.png';
import web6 from '../images/Landing/web6.png';
import { Link}  from 'react-router-dom';


export default class Solutions extends Component {
  render() {
    return (
      
      <div className="container">
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
                                    <Link to ="/RegisterLanding" className="nav-link" >Sign in</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>      
                </div>
            </div>
        </div>
    </div>
      <div className="header-down">
        <h1>
                    Solution
        </h1>
        <p>
          One Plateform, Four Solution
        </p>
        <strong>
                    The Worls's # leadershipe Development Plateform
         </strong>
      </div>
      <div className="center-data">
        <div className="row">
          <div className="col-md-3">
            <div className="solution-manages">
              <div className="image-ui">
                <img src={ firstImage}/>
                </div>
                <div className="heading-solution">
                  <h3 className="solution-h3">
                           Managed
                    <br />
                           Mentoring
                       
                    </h3>
                  </div>
                  <div className="solution-name">
                    <p className="solution-p">
                         Everwise-run
                         Mentoring experience   
                        </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="solution-manages">
                  <div className="image-ui">
                    <img src={ SecondImage } />
                    </div>
                    <div className="heading-solution">
                      <h3 className="solution-h3">Mentoring 
                        <br />
                       Software
                        </h3>
                      </div>
                      <div className="solution-name">
                        <p className="solution-p">
                          Company-run mentoring at scale  
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="solution-manages">
                      <div className="image-ui">
                        <img src={ SecondImage} />
                        </div>
                        <div className="heading-solution">
                          <h3 className="solution-h3">
                           Leadership 
                            <br /> Marketplace
                       
                            </h3>
                          </div>
                          <div className="solution-name">
                            <p className="solution-p">
                           Pre-built,expert-designed learning Paths 
                        </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="solution-manages">
                          <div className="image-ui">
                            <img src={ThirdImage} />
                            </div>
                            <div className="heading-solution">
                              <h3 className="solution-h3"> Academy 
                                <br /> Builder
                                </h3>
                              </div>
                              <div className="solution-name">
                                <p className="solution-p">
                            Company-designed learning pathes
                        </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                        <div className="header-down1">
                          <p>
                    ROI you can see and feel
                </p>
                          <strong>
                   Not only does everwise spark joy,qulity of the work improves as well
                </strong>
                        </div>
                        <div className="row">
                          <div className="col-md-3">
                            <div className="solution-manages">
                              <div className="image-ui">
                                <img src={ circle1}/>
                                </div>
                                <div className="heading-solution"></div>
                                <div className="solution-name">
                                  <p className="solution-p2">
                         Everwise-run
                         Mentoring experience   
                        </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="solution-manages">
                                <div className="image-ui">
                                  <img src={circle2}/>
                                  </div>
                                  <div className="solution-name">
                                    <p className="solution-p2">
                         Everwise-run
                         Mentoring experience   
                        </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="solution-manages">
                                  <div className="image-ui">
                                    <img src={circle2} />
                                    </div>
                                    <div className="heading-solution"></div>
                                    <div className="solution-name">
                                      <p className="solution-p2">
                           Pre-built,expert-designed learning Paths 
                        </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="solution-manages">
                                    <div className="image-ui">
                                      <img src={ circle3} />
                                      </div>
                                      <div className="solution-name">
                                        <p className="solution-p2">
                            Company-designed learning pathes
                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <hr />
                                  <div className="header-down1">
                                    <h1>
                    
                </h1>
                                  </div>
                                  <div className="reviews-1">
                                    <div className="row">
                                      <div className="col-md-4">
                                        <div className="solution-manages">
                                          <div className="image-ui">
                                            <img src={firstImage}/>
                                            </div>
                                            <div className="solution-name">
                                              <p className="solution-p1">
                        Lorem ipsum dolor sit amet, "Duis aute irure dolor in reprehenderit in  
                        </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div className="solution-manages">
                                            <div className="image-ui">
                                              <img src={SecondImage} />
                                              </div>
                                              <div className="solution-name">
                                                <p className="solution-p1">
                          "Excepteur sint occaecat cupidatat non
    consectetur adipiscing elit aliquip ex
                        </p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-md-4">
                                            <div className="solution-manages">
                                              <div className="image-ui">
                                                <img src={ThirdImage}/>
                                                </div>
                                                <div className="solution-name">
                                                  <p className="solution-p1">
                            ea voluptate velit esse cillum dolore eu fugiat proident, sunt in culpa qui officia
    commodo consequat." 
                        </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <hr/>
                                          <div className="client-1">
                                            <div className="row">
                                              <div className="col-md-4">
                                                <div className="solution-manages">
                                                  <div className="image-ui">
                                                    <img src={firstImage} />
                                                    </div>
                                                    <div className="heading-solution">
                                                      <h3 className="solution-h3">
                           client one
                       </h3>
                                                    </div>
                                                    <div className="solution-name">
                                                      <p className="solution-p">
                         position  
                        </p>
                                                      <p className="solution-p">
                        company  
                        </p>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-md-4">
                                                  <div className="solution-manages">
                                                    <div className="image-ui">
                                                      <img src={SecondImage}/>
                                                      </div>
                                                      <div className="heading-solution">
                                                        <h3 className="solution-h3">client two</h3>
                                                      </div>
                                                      <div className="solution-name">
                                                        <p className="solution-p">position 
                        </p>
                                                        <p className="solution-p">
                        company  
                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4">
                                                    <div className="solution-manages">
                                                      <div className="image-ui">
                                                        <img src={ThirdImage}/>
                                                        </div>
                                                        <div className="heading-solution">
                                                          <h3 className="solution-h3">
                          client three
                       </h3>
                                                        </div>
                                                        <div className="solution-name">
                                                          <p className="solution-p">
                         position  
                        </p>
                                                          <p className="solution-p">
                        company  
                        </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <hr />
                                                  
                                                      <hr />
                                                        <div className="header-down1">
                                                          <h1>
                                                       Services
                                                           </h1>
                                                        </div>
                                                        <div className="row">
                                                          <div className="col-md-6">
                                                            <div className="secound-row row">
                                                              <div className="col-md-1">
                                                                <div>
                                                                  <img src={ web1} />
                                                                  </div>
                                                                </div>
                                                                <div className="col-md-11">
                                                                  <div>
                                                              -      <h5 className="set-h5">Web Application</h5>
                                                                    <p className="p-data">Develop high quality web application for your startup</p>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div className="secound-row row">
                                                                <div className="col-md-1">
                                                                  <div>
                                                                    <img src={web2} /> 
                                                                    </div>
                                                                  </div>
                                                                  <div className="col-md-11">
                                                                    <div>
                                                                      <h5 className="set-h5">Web Application</h5>
                                                                      <p className="p-data">Develop high quality web application for your startup</p>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div className="secound-row row">
                                                                  <div className="col-md-1">
                                                                    <div>
                                                                      <img src={web3} />
                                                                      </div>
                                                                    </div>
                                                                    <div className="col-md-11">
                                                                      <div>
                                                                        <h5 className="set-h5">Web Application</h5>
                                                                        <p className="p-data">Develop high quality web application for your startup</p>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                  <div className="secound-row row">
                                                                    <div className="col-md-1">
                                                                      <div>
                                                                        <img src={web4} />
                                                                        </div>
                                                                      </div>
                                                                      <div className="col-md-11">
                                                                        <div>
                                                                          <h5 className="set-h5">Web Application</h5>
                                                                          <p className="p-data">Develop high quality web application for your startup</p>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div className="secound-row row">
                                                                      <div className="col-md-1">
                                                                        <div>
                                                                          <img src={web5} />
                                                                          </div>
                                                                        </div>
                                                                        <div className="col-md-11">
                                                                          <div>
                                                                            <h5 className="set-h5">Web Application</h5>
                                                                            <p className="p-data">Develop high quality web application for your startup</p>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div className="secound-row row">
                                                                        <div className="col-md-1">
                                                                          <div>
                                                                            <img src={web6} />
                                                                            </div>
                                                                          </div>
                                                                          <div className="col-md-11">
                                                                            <div>
                                                                              <h5 className="set-h5">Web Application</h5>
                                                                              <p className="p-data">Develop high quality web application for your startup</p>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div className="contact-form">
                                                    <div className="container">
                                                      <div className="contact-heading">
                                                        <div className="header-down1">
                                                          <h1>
                    Contact form
                </h1>                                       <form>
                                                                  <div class="row">
                                                                      <div class="col-md-9" style={{ margin:"auto"}}
>
                                                                          <div class="row">
                                                                      <div class="col-md-6">
                                                                        <input class="input-contactform" type="" name="" placeholder="input" /> 
                                                                      </div>
                                                                      <div class="col-md-6">
                                                                          <input class="input-contactform" placeholder="input" type="" name="" />
                                                                      </div>
                                                                      <div class="col-md-12">
                                                                          <textarea class="text-contactform" placeholder="text">
                                                                              
                                                                          </textarea>
                                                                      </div>
                                                                      <div class="col-md-12">
                                                                        <button  class="contact-send" >send</button>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                              </form>
                                                        </div>
                                                      </div>
                                          
                                                        </div>
                                                      </div>
                                                                    </div>
                                      

    )
  }
}
