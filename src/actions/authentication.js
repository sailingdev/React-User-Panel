import axios from 'axios';
import {GET_ERRORS, SET_CURRENT_USER} from './types';
import SetAuthToken from '../util/setAuthToken'

export const registerUser = (userData, history) => dispatch => {
  axios
    .post('https://freelancerapis.herokuapp.com/user/signup/', userData)
    .then(res =>  history.push('/login'))
    .catch(err =>{
     dispatch({
       type: GET_ERRORS,
       payload: err.response.data
     })
    });    
};

export const loginUser =(user,history) =>dispatch =>{
  axios.post('https://freelancerapis.herokuapp.com/user/signin/', user)
        .then( res =>  {
          const {token , roleid ,fullname, loginattempt,email } = res.data;
          localStorage.setItem('fullname',fullname );
          localStorage.setItem('email',email )

          const profileData={ fullname,email }
          localStorage.setItem('jwtToken', token);
          SetAuthToken(token);

          dispatch({
            type:SET_CURRENT_USER,
            payload:profileData

          })

          if( roleid === 1){

            if( loginattempt === "First time")
            {
              return (history.push('/profile'))
            }else if( loginattempt === "First Count"){
              return (history.push('/profile'))
            }else{
              return(history.push('/developer/project'))
            }

          }else if(roleid == 2) {
            if( loginattempt === "First time")
            {
              return (history.push('/checkclientprofle'))
            }else if( loginattempt === "First Count"){
              return (history.push('/checkclientprofle'))
            }else{ 
              return (history.push('/clientdash'))
            }
          }
          
        })
        .catch(err => {
          dispatch({
            type:GET_ERRORS,
            payload:err.response.data
          });
  });
}






