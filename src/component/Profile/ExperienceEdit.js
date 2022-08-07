import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';
import { template } from 'handlebars';
import { fromEvent } from 'rxjs';
import { thisExpression } from '@babel/types';
import { func } from 'prop-types';
import '../css/profile.css';


export default class ExperienceEdit extends Component {

    constructor(props){
        super(props);
        this.state={
            collegeName:'',
            years:'',
            month:'',
            days:'',
            oldCompany:'',
            githubURL:'',
            pictures:'',
            languages:'',
            languagList:[],
            technologyList:[],
            technology:'',
            username:'',
            file:'',
            message:''

        }
    }

   

    handleCheck(e){
        this.setState({
            ...this.state,
          [e.target.name]:e.target.value
        })
    }

    handleChecks(languages){
        this.setState({
            ...this.state,
            languages:languages
        }); 
    }

    handleChecksing(technology){ 
        this.setState({
            technology,     
        });
        console.log(`options selected is:`,technology)
    }

    componentWillMount(){
      let emailId=localStorage.getItem('email');
      axios.get(`https://freelancerapis.herokuapp.com/user/experience/?username=${emailId}`)
      .then( response =>
        this.setState({
          collegeName:response.data.collegeName,
          years:response.data.years,
          month:response.data.month,
          days:response.data.days,
          oldCompany:response.data.oldCompany,
          githubURL:response.data.githubURL,
          file:response.data.file,
          username:emailId,
          pictures:response.data.pictures
        
       
      })
      )
      
      .catch(err => err.response.data)
    }

    componentDidMount(){ 
        axios.get( 'https://freelancerapis.herokuapp.com/user/language/')
            .then( res =>this.setState ({ languagList:res.data}))
            .catch( err => err.response)
        
            axios.get( 'https://freelancerapis.herokuapp.com/user/technology/')
            .then( res =>this.setState ({ technologyList:res.data}))
            .catch( err => err.response)
       
    }

    FileHandler(e){
        this.setState({
            ...this.state,
            file:e.target.files[0],
            loaded:0
        });
    }
  
    
    handleSubmit(e){
        e.preventDefault();
        
          if(this.state.technology.length !== 0 ){
            var tecnho =this.state.technology.map( item =>item.label)
          }

          if(this.state.languages.length !== 0 ){
            var lnaguages =this.state.languages.map( item =>item.label)
          }
          
         
        
        
          const emailid= localStorage.getItem('email');
          const data = new FormData();
          data.append('pictures', this.state.file)
          data.append('username', emailid)
          data.append('collegeName',this.state.collegeName)
          data.append('years',this.state.years)
          data.append('month',this.state.month)
          data.append('days',this.state.days)
          data.append('oldCompany',this.state.oldCompany)
          data.append('githubURL',this.state.githubURL)
          data.append('languages',lnaguages)
          data.append('technology',tecnho)

          console.log('data',(data))

          axios.put(`https://freelancerapis.herokuapp.com/user/experience/?username=${emailid}`,data)
          .then(res => this.setState({
              message:'edited successfully'
          }))
          .catch(err => err.response.data)

        
        
        
    }
    render() {
        const { languagList ,technologyList , message} = this.state;
        
        return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            <div className="container">

            {(message === 'edited successfully') && (
              <div className="NextError" >Profile Updated Successfully <span></span></div>
            )}
             <div className="tab-content">
                <div className="tab-pane active">
                    <br/>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="main">
                            <h3 className="edit-heading">Profile</h3>
                                <div className="containt">
                                    {
                                        /* <h4 className="mr">{this.state.first_name}</h4>
                                    <div>
                                        <h4 className="mr-1">{this.props.auth.user.email}</h4>
                                    </div>
                                    <p>developer</p> */
                                    }
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
                        <div className="col-md-9">



                        <div >
                <div className="head-main">
        
                <div className="nav-header">
                    <div className="logo-header">
                    <img src="" className="img-responsive" alt="" />
                    </div>
                </div>
                
                <div className="heading-setting">
                    
                </div>
                
                
                
                <div className="main-form placehh">
                                    
                        <form onSubmit={this.handleSubmit.bind(this)}  encType="multipart/form-data">
                      
                            <div className="techno">
                                <h6 className="h6-1">Tecnology Knows:</h6>
                                <div className="tb-description">  
                                    <Select options={ technologyList } isMulti value={this.state.technology} onChange={this.handleChecksing.bind(this)} />
                                </div>

                            </div>
                            <div className="techno">
                                <h6 className="h6-1">Education background:</h6>
                                <input className="dscr" type="text" name="collegeName" placeholder="College Name **" value={this.state.collegeName} onChange={this.handleCheck.bind(this)}  />
                            </div>
                            <div className="techno">
                                <h6 className="h6-1">Work Experience:</h6>
                                <div className="exe">
                                    <input className="dscr" type="number" name="years" placeholder="years*" value={this.state.years} onChange={this.handleCheck.bind(this)} />
                                    <input className="dscr" type="number" name="month" placeholder="Months*" value={this.state.month} onChange={this.handleCheck.bind(this)}  />
                                    <input className="dscr" type="number" name="days" placeholder="Days*" value={this.state.days} onChange={this.handleCheck.bind(this)} />
                                </div>
                            </div>
                            <div className="techno">
                                <h6 className="h6-1">Old Company name:</h6>
                                <input className="dscr" type="text" name="oldCompany" placeholder="Company Name*" value={this.state.oldCompany} onChange={this.handleCheck.bind(this)} />
                            </div>
                            <div className="techno">
                                <h6 className="h6-1">Github Url:</h6>
                                <input className="dscr" type="text" name="githubURL" placeholder="GitHub URL*" value={this.state.githubURL} onChange={this.handleCheck.bind(this)} />
                            </div>
                            
                            <div className="techno">
                                <h6 className="h6-1">Select Resume:</h6>
                                <div className="tb-description">  
                                    <input type="file"  onChange={this.FileHandler.bind(this)}/>
                                    <label htmlFor="file">{this.state.pictures}</label>
                                </div>

                            </div>

                            <div className="techno">
                                <h6 className="h6-1">Languege Knows:</h6>
                                <div className="tb-description">  
                                    <Select options={ languagList } isMulti value={this.state.languages} onChange={this.handleChecks.bind(this)} />
                                </div>

                            </div>



                            <div className="bt-fl">
                                <button className="btn-save">Save</button>  
                            </div>
                           
                        </form>
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

