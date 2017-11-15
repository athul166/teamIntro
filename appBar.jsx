import React from 'react';
import {Menu, Segment} from 'semantic-ui-react';
export default class Appbar extends React.Component {
  render() {
    return (
      <div>
      <Menu style={{
        opacity:1,
        marginBottom: '0px',
        marginTop:'20px'
      }} pointing="true" secondary="true" size="massive" className="Appbar">

      <Menu.Menu position='right' style={{
          marginTop: "10px ",
          marginRight:"50px"
        }}>
        <Menu.Item name='Home' className='appBarMenuItem' style={{
            color: "white",
            cursor: "pointer"
          }}/>
        <Menu.Item name='Team' className='appBarMenuItem' style={{
            color: "white",
            cursor: "pointer"
          }}/>
        <Menu.Item name='Tech Stack' className='appBarMenuItem' style={{
            color: "white",
            cursor: "pointer"
          }}/>
        <Menu.Item name='Projects' className='appBarMenuItem' style={{
            color: "white",
            cursor: "pointer"
          }}/>
      </Menu.Menu>
    </Menu>
    <img src='./teamIntroPhotos/team-logo-bg-transparent.png' height="130px" style={{position:"fixed",top: "3px",
    left: "30px"}}/>
  </div>);
  }
}
