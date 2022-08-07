import React, { Component } from 'react';
import { Route , Redirect} from 'react-router-dom';


const PrivateRoute = ({component:Component, ...rest}) =>(<Route
  {...rest}
   render = {(props)=> localStorage.getItem("jwtToken")?<Component {...props}/> : <Redirect to={{
     pathname:'/login',
     state:{
       from:props.location
     }
   }}/>}

  />)


export default PrivateRoute;