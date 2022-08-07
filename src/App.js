import React ,{ Component , Suspense, lazy } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';


// Developer Dashboard component




//client dashboard


const ProfileClient =lazy( () =>import('./component/Client/ProfileClient'));
const ProileEditC = lazy( () => import('./component/Client/ProfileEditC'));
const ClientDash = lazy(() =>import('./component/Client/ClientDash'));
const PostProject = lazy( () => import('./component/Client/PostProject'));


// developer dashboard
const Profile =lazy( () =>import('./component/Profile/Profile')) ;
const Experience =lazy(() =>import('./component/Profile/Experience')) ;
const ProfileEdit =lazy(() =>import('./component/Profile/ProfileEdit')) ;
const ExperienceEdit =lazy( ()=>import('./component/Profile/ExperienceEdit')) ;
const Project = lazy( () =>import('./component/DeveloperDashborad/Projects')) ;
const ChatBox =lazy(() =>import('./component/DeveloperDashborad/ChatBox')) ;
const Team =lazy( () =>import('./component/DeveloperDashborad/Team')) ;
const Slack = lazy( () =>import('./component/DeveloperDashborad/slack/slack') )


//Login and Register component


const Register = lazy( ()=>import('./component/auth/Register'));
const  Login =lazy( () => import('./component/auth/Login')) ;
const LandningLatest = lazy( () =>import ('./component/auth/LandingNew'));
const LandingPage = lazy( () =>import('./component/auth/LandingPage'));
const Solutions = lazy( () =>import('./component/auth/Solutions'));
const Platform = lazy( () =>import('./component/auth/Landing/Platform'));
const Partner = lazy( () =>import('./component/auth/Landing/Partner'));

const ForgetPassword = lazy( () =>import('./component/auth/ForgetPassword')); 

const PrivateRoute =lazy( () =>import('../src/PrivateRoute'));
const Test = lazy( () =>import('./component/dashboard2/CheckNew.jsx'));


const override = css`
    display: block;
    margin: auto auto;
    border-color: red;
    top:0;
    bottom:0;
    left:0;
    right:0;
    position:absolute;
    
`;



class App extends Component{
  constructor(props){
    super(props);
    this.state={
      loading:true
    }
  }

  render(){
    

    return(
      <Provider store={store}>
        <Router>
          <Suspense fallback={ <div className='sweet-loading'>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={50}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div> }>
            <Switch>
              <PrivateRoute exact path="/profile" component={Profile}/>
              <PrivateRoute exact path="/experience" component={Experience}/>
              
              <PrivateRoute path="/profile/edit/:username" component={ ProfileEdit} />
              <PrivateRoute path="/experience/edit/" component={ ExperienceEdit} />
              <PrivateRoute path="/developer/project" component={ Project } />
              <PrivateRoute path="/developer/chat" component={ ChatBox } />
              <PrivateRoute path="/developer/team" component={ Team } />
              <PrivateRoute path="/developer/slack" component={ Slack } />


              <PrivateRoute path="/checkclientprofle" component={ ProfileClient } />
              <PrivateRoute path="/clientEditProfile" component={ ProileEditC } />
              <PrivateRoute path="/clientdash" component={ ClientDash } />
              
              
            
              

              <Route path="/landing" component= {LandingPage}/>
              <Route exact path="/RegisterLanding" component={LandningLatest} />
              
              <Route path="/platform" component= {Platform}/>
              <Route path="/solutions" component= {Solutions}/>
              <Route path="/partner" component= {Partner}/>
              <Route path="/signup" component= {Register}/>
              <Route path="/login" component={Login} /> 
              <Route path="/forget" component={ForgetPassword} /> 
              <Route path="/test" component={Test} />

              <Route path="/postproject" component={PostProject} />
          </Switch>
          </Suspense>
        </Router>
      </Provider>
      
    )
  }

}

export default App;
