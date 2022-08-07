import React, { Component } from 'react';
import Experience from '../Profile/Experience';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter, Redirect} from 'react-router-dom';
import axios from 'axios'
import {message} from 'antd';
import '../css/profile.css';


class Profile extends Component {

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
      username:'',
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

        const email= localStorage.getItem('email');
        const profileData={
     
            title:this.state.title,
            username:email,
            country:this.state.country,  
            biography:this.state.biography,
            fbURl:this.state.fbURl,
            GoogleURL:this.state.GoogleURL,
            LinkedinUrl:this.state.LinkedinUrl,
            TwitterUrl:this.state.TwitterUrl,     
        }
        
        console.log(profileData)

        axios.post('https://freelancerapis.herokuapp.com/user/profile/', profileData)
            .then( res => res.data )
            .then(response => {
            console.log(response.done)
                if(response.done == "successfully"){
                    this.setState({
                        messages:true
                    })
                }
            } )
            .catch( err => console.log(err.response.data))
  }

  componentDidMount(){

        
    
        const fullname=localStorage.getItem('fullname');
        const email= localStorage.getItem('email');
        this.setState({
            ...this.state,
            first_name:fullname,
            email:email
        });
      
  
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
     
      title:response.data.title,
      country:response.data.country,
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
    console.log(messages)
    console.log(this.props.auth)

    return (
        
        <div className="head-main">
            { messages && (
                < Redirect to ="/experience"/>
            )}
            
            
            
            
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
                                        <Link to="/profile/edit/:username"><button className="bt-edit">Edit</button></Link>
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
                                                <input required type="text"  placeholder="first Name" className="dscr" value={this.state.first_name} onChange={this.handleChange} name="First Name"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="di-2">
                                    <div className="title col-md-6">
                                        <h6 className="h6-1">Title</h6>
                                        <div className="tb-description">
                                        <input type="text" required className="dscr"  required value={this.state.title} onChange={this.handleChange} name="title" placeholder="Title"/>
                                        </div>
                                    </div>
                                    <div className="title col-md-6">
                                        <h6 className="h6-1">Email</h6>
                                        <div className="tb-description">
                                        <input type="email" required className="dscr"  value={this.state.email} onChange={this.handleChange} name="email" placeholder="Email Id"/>
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

export default connect( mapStateToProps)(withRouter(Profile));