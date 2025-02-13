import React from 'react'
import {Link, outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div style={{width:"100%", height:"100%", background:"bisque"}}>Profile

    <hr />
    <br />
    <hr />
      <Link to ="/profile/myaccount">MyAccount</Link> <br/><br/>
      <Link to="/profile/mysettings">MySettings</Link>
      <outlet/>
      
    </div>
  )
}

export default Profile

