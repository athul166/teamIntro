import React from 'react';
import Appbar from './appBar.jsx';

export default class Website extends React.Component {
  render() {
    return (<div style={{
        marginTop: '0px',
        padding: '0px'
      }}>
      <Appbar/>
      <div className="box1" style={{marginTop: '0px'}}>
        <span style={{color:"white"}} className="caption" style={{position: "absolute",top: "470px",left: "786px",color:"white"}}>
          FOR A CRACK TEAM OF
        </span>
        <span style={{color:"white"}} className="captionPartTwo" style={{color:"#F76C12",position: "absolute",top: "520px",left: "786px",color:"white"}}>
          FULL-STACK PROGRAMMERS
        </span>
        <span style={{color:"white"}} className="caption" style={{position: "absolute",top: "570px",left: "786px",color:"white"}}>
          WITH STAND-APART EXPERTISE.
        </span>
      </div>
      <div className="box2"></div>
      <div className="box3"></div>
    </div>);
  }
}
