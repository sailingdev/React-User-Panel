import React, { Component } from 'react';


import  { ValidatorForm , TextValidator } from 'react-material-ui-form-validator';

class Test extends Component{
  
  constructor(props){
    super(props);

    this.state={
      email:'',
      first_name:'',
      phone:''
    }
  }

  handleChange(e){
    this.setState({
      ...this.state,
      [e.target.name]:e.target.value
    });
  }

  HandleSubmit(e){
    e.preventDefault();

    const data ={
      email:this.state.email,
      first_name:this.state.first_name
    }

    console.log(data)
  }
  render(){
    return(
      <div className="NewMaterialUi">
          <ValidatorForm ref="form" onSubmit={this.HandleSubmit.bind(this)} onError={ errors => console.log(errors)}>

            <TextValidator
            label="Email"
            onChange={this.handleChange.bind(this)}
            name="email"
            value={this.state.email}
            validators={['required', 'isEmail' ]}
            errorMessages={['this field is required', 'email is not valid']}
            />
             <TextValidator
            label="first_name"
            onChange={this.handleChange.bind(this)}
            name="first_name"
            value={this.state.first_name}
            validators={['required' ]}
            errorMessages={['this field is required', 'first name is not valid']}
            />
            <button type="submit">Submit</button>
           
          </ValidatorForm>
      </div>
    )
  }
}


export default Test;