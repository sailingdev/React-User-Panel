import React , { Component } from 'react';
import slackpng from './slack.png';
import './slack.css';
import smilipng from './smili.png';
import arrpng from './arr.png';
import arrowpng from './arrow.png';


class Slack extends Component{

  render(){
    return(
      <div className="main5">
        <div>
          <h1>join us for a video call !</h1>
          <div className="imoji">
          <p>we'd like to get to know you better ,and to see if you're good fit for our elite development family</p> <img className="png-set" src={smilipng}/></div>
        </div>
        <div className="img">
          <a href="https://slack.com/intl/en-in/downloads/other">
          <img className="png-set1" src={slackpng} />
            </a>
        </div>
    
      
        <div classNameName="left-content">
          <table>
            <tr>
              <td><p className="p-circle">1</p></td>
              <td><span className="imp-data">Install Slack by clicking on the icon avob </span></td>
            </tr>
            <tr>
              <td><p className="p-circle">2</p></td>
              <td><span className="imp-data"> Join oure workspace by clicking the link </span></td>
              </tr>
              <tr>
                
                
                <td>
                  
                </td>
                <td className="imagefixed">
                  <a href="https://www.programmableweb.com/news/how-to-connect-to-api-javascript/how-to/2018/06/17" className="imagerender"
                  >
                    https://www.programmableweb.com/news/how-to-connect-to-api-javascript/how-to/2018/06/17</a></td>
                </tr>
                <tr>
                  <td><p className="p-circle">1</p></td>
                  <td><span className="imp-data"  > We'll reach out to you for a coll</span></td>
                </tr>
          </table>
       </div>
          <button className="btnn">next <img className="im-arrow" src={arrpng}/></button>
       </div>

    )
  }
}

export default Slack;