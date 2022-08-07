import React, { Component } from 'react';
import Experience from '../Profile/Experience';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter, Redirect} from 'react-router-dom';
import axios from 'axios'
import {message} from 'antd';
import '../css/profile.css';


class ProfileEdit extends Component {

  constructor(props){
    super(props);
    this.state={
      first_name:'',
      title:'',
      country:'',
      email:'',
      biography:'',
      fbURl:'',
      GoogleURL:'',
      LinkedinUrl:'',
      TwitterUrl:'',
      countriesList:[],  
      messages:false,
    }
    this.handleChange=this.handleChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }


  handleChange(e){
    this.setState({
      ...this.state,
      [e.target.name]:e.target.value
    })
  }
  

  onSubmit(e){
        e.preventDefault(); 
        const profileData={

            first_name:this.state.first_name,
            title:this.state.title,
            email:this.state.email,
            country:this.state.country,  
            biography:this.state.biography,
            fbURl:this.state.fbURl,
            GoogleURL:this.state.GoogleURL,
            LinkedinUrl:this.state.LinkedinUrl,
            TwitterUrl:this.state.TwitterUrl,     
        };
        axios.put(`https://freelancerapis.herokuapp.com/user/profile/?username=${this.state.email}`,profileData)
        .then(response => console.log(response))
        .catch(err => err.response.data)
    
    console.log(profileData);

  }

  componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(res => this.setState ({
                ...this.state,
                countriesList:res.data
            }))
            .catch(err => err.response)
            
  }

  componentWillMount(){
      let emailId=localStorage.getItem('email');
      

      axios.get(`https://freelancerapis.herokuapp.com/user/profile/?username=${emailId}`)
      .then( response =>this.setState({
        first_name:this.state.first_name,
        title:response.data.title,
        country:response.data.country,
        email:response.data.username,
        biography:response.data.biography,
        fbURl:response.data.fbURl,
        GoogleURL:response.data.GoogleURL,
        LinkedinUrl:response.data.LinkedinUrl,
        TwitterUrl:response.data.TwitterUrl,
        
       
      })
      )
      .catch(err => err.response.data)
  }

  
  render() {
    const { messages} = this.state;
    console.log(this.state.first_name)

    return (
        
        <div className="head-main">
            { messages && (
                < Redirect to ="/experience"/>
            )}
            
            
            <div className="nav-header">
            <div className="logo-header">
                
            <img src="" className="img-responsive" alt="" />
                        
            </div>
           
            
            </div>
        
            <div className="heading-setting">
                
            </div>
            
        <div className="container">
            <div className="tab-content">
                <div className="tab-pane active">
                    <br/>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="main">
                            <h3 className="edit-heading">Profile</h3>
                                <div className="containt">
                                    <h6 className="per-info"><span className="fdf"></span>
                                      <Link to="/profile">Personal Information</Link>
                                    </h6>
                                    <h6 className="pro-info">
                                    <Link to="/experience">Professional Experience</Link>
                                    </h6>

                                </div>
                            </div>
                            <div className="heder-profile">
                            
                                    <button  className="btn btn-default btn-flat" 
                                       onClick ={()=>{ localStorage.removeItem("jwtToken");
                                        window.location.href = "/login"	}}>Sign out
                                    </button>
                    
                            </div>
                        </div>
                        
                        <div className="col-md-9" >
                       
                            <form onSubmit={this.onSubmit} >
                                <div className="main-1">
                                    <div className="ddd">
                                        <h3 className="edit-heading">Personal Information</h3>
                                       
                                    </div>
                                <div className="pr-img">
                                    <div>
                                    <a className="profile-userpic" href="">
                                        <img src="https://static.infragistics.com/marketing/Website/products/ultimate/inventoryApp-img.png" width="70px;" className="img-responsive" alt="" />
                                    </a>
                                    </div>
                                    <div className="pr-name">
                                        <h6>
                                            {this.state.first_name}

                                            {/* <p>{this.state.email}</p> */}
                                        </h6>
                                        <p>
                                            Change avatar
                                        </p>
                                    </div>
                                </div>
                                    <div className="di-2">
                                        <div className="title col-md-6">
                                            <h6 className="h6-1">Full Name</h6>
                                            <div className="tb-description">
                                                <input type="text"  placeholder="Full Name" className="dscr" value={this.state.first_name} onChange={this.handleChange} name="first_name"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="di-2">
                                    <div className="title col-md-6">
                                        <h6 className="h6-1">Title</h6>
                                        <div className="tb-description">
                                        <input type="text"  className="dscr"  required value={this.state.title} onChange={this.handleChange} name="title" placeholder="Title"/>
                                        </div>
                                    </div>
                                    <div className="title col-md-6">
                                        <h6 className="h6-1">Email</h6>
                                        <div className="tb-description">
                                        <input type="email" readOnly className="dscr"  value={this.state.email} onChange={this.handleChange} name="email" placeholder="Email Id"/>
                                        </div>
                                    </div>

                                    </div>
                
                                    <div className="title col-md-6">
                                        <h6 className="h6-1">Country</h6>
                                        <div className="tb-description">
                                            <select className="sel" value={this.state.country} name="country" onChange={this.handleChange} >
                                                {this.state.countriesList.map((e, key) =>{
                                                    return <option key={key} value={e.name}>{e.name}</option>
                                                })}  
                                            </select>
                                        </div>
                                    </div>
                
                                    <div className="col-md-12">
                                    <h5 className="h5-li">About me</h5>
                                    </div>
                                    <div className="title col-md-12">
                                        <h6 className="h6-1">Biography</h6>
                                        <div className="tb-description">
                                        <input type="text" required className="dscr" value={this.state.biography} onChange={this.handleChange} name="biography" placeholder="Biography"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                    <h5 className="h5-li">External links</h5>
                                    </div>
                                    <div className="di-2">
                                    <div className="title col-md-6">
                                        <h6 className="h6-1">Facebook url:</h6>
                                        <div className="tb-description">
                                            <input type="url" className="dscr" value={this.state.fbURl} onChange={this.handleChange} name="fbURl" placeholder="Facebook URL"/>
                                        </div>
                                    </div>
                                    <div className="title col-md-6">
                                        <h6 className="h6-1">Google url:</h6>
                                        <div className="tb-description">
                                        <input required type="url" className="dscr" value={this.state.GoogleURL} onChange={this.handleChange} name="GoogleURL" placeholder="Google URL"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="di-2">
                                    <div className="title col-md-6">
                                        <h6 className="h6-1">Linkedin Url:</h6>
                                        <div className="tb-description">
                                        <input required type="url" className="dscr" value={this.state.LinkedinUrl} onChange={this.handleChange} name="LinkedinUrl" placeholder="Linkedin Url"/>
                                        </div>
                                    </div>
                                    <div className="title col-md-6">
                                        <h6 className="h6-1">Twitter Url:</h6>
                                        <div className="tb-description">
                                            <input required type="url"  className="dscr" value={this.state.TwitterUrl} onChange={this.handleChange} name="TwitterUrl" placeholder="Twitter Url"/>
                                        </div>
                                    </div>
                                    </div>
                                   
                                    
                                    
                                    <div className="bt-fl col-md-12">
                                        <button className="btn-save">Save</button>
                                    </div>
                                </div>
                                </form>
                        </div>
                        
                        
                    </div>
                </div>
            
            </div>
               
        </div>
        </div>
        
    )
  }
}



const mapStateToProps =state =>({
    auth:state.auth
})

export default connect( mapStateToProps)(withRouter(ProfileEdit));