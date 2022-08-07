import React, { Component } from 'react'
import { Link }  from 'react-router-dom';
import axios from 'axios';
import './css/Profile.css';
import Select  from 'react-select';
import DatePicker from "react-datepicker";
import '../css/profile.css';
import "react-datepicker/dist/react-datepicker.css";

import SmartInput  from 'react-phone-number-input/smart-input';
import PhoneInput from 'react-phone-number-input';




export default class ProileEditC extends Component {

  constructor(props){
    super(props);
    this.state={
      first_name:'',
      profession:'',
      country:'',
      LangauageList:[],
      langauge:'',
      email:'',
      fbURl:'',
      GoogleURL:'',
      biography:'',
      countriesList:[],
      username:'',
      messages:false,
      address:'',
      city:'',
      dob: new Date(),
      message:'',
      phoneNumber:'',
      selectedOption: '',
      err:''
    }
    this.handleChange=this.handleChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  radioChange(e) {
    this.setState({
      selectedOption: e.currentTarget.value
    });
  }

  handleChecks(langauge){

    this.setState({
        ...this.state,
        langauge:langauge
    })
  }
  handleChange(e){
    this.setState({
      ...this.state,
      [e.target.name]:e.target.value
    })
  }

  componentDidMount(){

    
    (function()
    {
      if( window.localStorage )
      {
        if( !localStorage.getItem('firstLoad') )
        {
          localStorage['firstLoad'] = true;
          window.location.reload();
        }  
        else
          localStorage.removeItem('firstLoad');
      }
    })();

    const fullname=localStorage.getItem('fullname')
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
    
    
    axios.get('https://freelancerapis.herokuapp.com/user/language/')
        .then( res => this.setState({
            ...this.state,
            LangauageList:res.data
        }) )
        .catch( err => err.response.data)
  }

  HandleDate(date){
      this.setState({
          dob:date
      });
  }


  componentWillMount(){

    let emailid = localStorage.getItem('email');

    axios
        .get(`https://freelancerapis.herokuapp.com/client/profile/?username=${emailid}`)
        .then(res => 
         
            this.setState({
            first_name:res.data.first_name,
            email:res.data.username,
            country:res.data.country,
            about:res.data.about,
            profession:res.data.profession,
            langauge:res.data.languages,
            city:res.data.city,
            // dob:res.data.dob,
            fbURl:res.data.fb_url,
            GoogleURL:res.data.google_url,
            biography:res.data.about,
            selectedOption:res.data.gender,
            address:res.data.address,
            phoneNumber:res.data.number,
             })
        )

  }

  onSubmit(e){
    e.preventDefault();

    const email = localStorage.getItem('email')
    
    if(this.state.langauge.length !== 0){
        var langauge = this.state.langauge.map( item => item.value)
    }
    const ProfileData={
      
      profession:this.state.profession,
      username:email,
      languages:langauge,
      country:this.state.country,  
      about:this.state.biography,
      fb_url:this.state.fbURl,
      google_url:this.state.GoogleURL,
      dob:this.state.dob,
      gender:this.state.selectedOption,
      number:this.state.phoneNumber,
      address:this.state.address,
      city:this.state.city    

    }

    console.log('profile', ProfileData)
    axios
        .put(`https://freelancerapis.herokuapp.com/client/profile/?username=${this.state.email}`,ProfileData)
        .then( response  => response.data)
        .then ( res => this.setState({ message:"successfully"}))
        .catch( err => this.setState ({err: "username existed"}))

        
  }
  render() {
    
    const { message ,err, LangauageList } = this.state;
    
    return (
      <div>


        
            
          <div className="container">
            <div className="tab-content">
                <div className="tab-pane active">
                    <br/>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="main">
                            <Link to ="/checkclientprofle"><h3 className="edit-heading">Profile</h3></Link>
                               
                            </div>
                            <div className="heder-profile">
                            
                                    <button  className="btn btn-default btn-flat" 
                                       onClick ={()=>{ localStorage.removeItem("jwtToken");
                                        window.location.href = "/login"	}}>Sign out
                                    </button>
                    
                            </div>
                        </div>
                        
                        <div >
                       
                            <form onSubmit={this.onSubmit} className="col-md-9">
                                <div className="main-1">
                                    <div className="ddd">
                                        <h3 className="edit-heading">Personal Information</h3>
                                        {/* <button onClick={browserHistory.goBack}>Back</button> */}
                                    </div>
                                <div className="pr-img">
                                    {/* <div>
                                    <a className="profile-userpic" href="">
                                        <img src="https://static.infragistics.com/marketing/Website/products/ultimate/inventoryApp-img.png" width="70px;" className="img-responsive" alt="" />
                                    </a>
                                    </div> */}
                                    
                                </div>
                                    <div className="di-2">
                                        <div className="title col-md-6">
                                            <h6 className="h6-1">Full Name</h6>
                                            <div className="tb-description">
                                                <input  type="text"  placeholder="first Name" className="dscr" value={this.state.first_name} onChange={this.handleChange} name="first_name"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="di-2">
                                    <div className="title col-md-6">
                                   
                                        <h6 className="h6-1">Profession</h6>
                                        <div className="tb-description">
                                        <input type="text"  className="dscr"  required value={this.state.profession} onChange={this.handleChange} name="profession" placeholder="Profession"/>
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


                                    <div className="title col-md-6">
                                            <h6 className="h6-1">Languages</h6>
                                            < Select options={LangauageList} isMulti value={this.state.langauge} name="langauge" onChange={this.handleChecks.bind(this)} ></ Select>

                                    </div>
                                    <div className="di-2">           
                                    <div className="col-md-12">
                                        <h5 className="h5-li">Adress</h5>
                                    </div>
                                    <div className="title col-md-6">
                                        <h6 className="h6-1">Address:</h6>
                                        <div className="tb-description">
                                            <input  type="text"  className="dscr" value={this.state.address} onChange={this.handleChange} name="address" placeholder="address"/>
                                        </div>
                                    </div>

                                    <div className="title col-md-6">
                                        <h6 className="h6-1">City:</h6>
                                        <div className="tb-description">
                                            <input  type="text"  className="dscr" value={this.state.city} onChange={this.handleChange} name="city" placeholder="City*"/>
                                        </div>
                                    </div>

                                    <div className="title col-md-6">
                                        <h6 className="h6-1">Gender:</h6>
                                        <div className="tb-description">
                                                     <input type="radio"
                                                            value="Male"
                                                            checked={this.state.selectedOption === "Male"}
                                                            onChange={this.radioChange.bind(this)} />Male

                                                    <input type="radio"
                                                        value="Female"
                                                        checked={this.state.selectedOption === "Female"}
                                                        onChange={this.radioChange.bind(this)}/>Female
                                        </div>
                                    </div>
                                    
                                    <div className="title col-md-6">
                                        <h6 className="h6-1">Date of Birth:</h6>
                                                    <DatePicker
                                                        selected={this.state.dob}
                                                        onChange={this.HandleDate.bind(this)}
                                                    />
                                        
                                    </div>

                                    <div className="title col-md-6">
                                        <h6 className="h6-1">Phone Number:</h6>
                                                <PhoneInput
                                                    inputComponent={SmartInput}
                                                    placeholder="Enter phone number"
                                                    value={this.state.phoneNumber}
                                                    onChange={phoneNumber => this.setState({ phoneNumber })} />
                                    </div>
                                    </div>
                                   
                                    
                                    
                                   
                
                                    <div className="col-md-12">
                                    <h5 className="h5-li">About me</h5>
                                    </div>
                                    <div className="title col-md-12">
                                        <h6 className="h6-1">Biography</h6>
                                        <div className="tb-description">
                                        <input type="text"  className="dscr" value={this.state.biography} onChange={this.handleChange} name="biography" placeholder="Biography"/>
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

                                    <div className="bt-fl col-md-12">
                                        <button className="btn-save">Save</button>
                                    </div>
                                    
                                </div>
                                </form>
                        </div>
                        {message ==='successfully' && (
                                                    
                                                    <div className="msgError">Profile Successfully Edited </div>
                                                    
                                                    )}
                                                    {err ==='username existed' && (
                                                    
                                                    <div className="Error">There is something error</div>
                                                    
                        )}

                        
                    </div>
                </div>
            
            </div>
               
        </div>
      </div>
    )
  }
}
