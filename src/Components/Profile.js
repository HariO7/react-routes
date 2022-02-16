import React from 'react'
import One from './one'

function Profile(props) {
  return (
    <div style={{backgroundColor:'red',width:'900px'}}>
      <h1>Profile</h1>
      <One data ={props.data}></One>
    </div>
  )
}

export default Profile