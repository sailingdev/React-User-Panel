import React, { Component } from 'react';
import '../css/Landing.css'
import { Link, Redirect } from 'react-router-dom';

export default class LandningLatest extends Component {

  constructor(props){
    super(props);
    this.state={
      url:'https://www.hedvig.io/wp-content/uploads/2018/11/hedvig-motion-bg-opt.mp4',
      developer:'',
      client:''
    }
  }

  handleChange(e) {
 
    this.setState({
      [e.target.name]: e.target.id
    });
    localStorage.setItem('myid',e.target.id)
  }

  render() {
    return (
      <div>

       
        <div className="global-wrapper">
            <div className="global-wrapper__inner">

                <div className="banner banner-home">
                    <div className="banner-home__video">
                        <video loop autoPlay>
                            <source src={this.state.url} type="video/mp4" />
                        </video>
                    </div>
                    <div className="banner-inner">
                        <div className="row1 text-center">
                            <div className="columns">
                                <div className="boxes boxes-color"></div>
                                <h1>Simple. Scalable. Secure.</h1>
                                <h5>Experience the world's only private, hybrid, and multi-cloud data management system for virtual and container environments.</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cta-home">
                    <div className="row1 align-center">
                        <div className="columns">
                        
                            <div className="row1 shadow align-middle">
                                <div className="columns small-12 medium-7 large-8">
                                    <p><strong>Welcome to the world of best Freelacer </strong>
                                        <br />
                                        <strong>Regsiter as</strong></p>
                                </div>
                                    
                                <div className="columns">
                                  <Link to="/login">
                                    <button type="submit"  className="button1" id ="1" name="developer" value={this.state.developer} onClick={this.handleChange.bind(this)}>
                                       Developer
                                    </button>
                                  </Link>

                                </div>
                                <div className="columns">
                                    <Link to="/login">
                                        <button className="button1"  name="freelancer"  id="2" value={this.state.freelancer} onClick={this.handleChange.bind(this)}>
                                            Client
                                        </button>
                                    </Link>

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
