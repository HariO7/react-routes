import React from 'react'
import Two from './two'

function One(props) {
  return (
    <div style={{backgroundColor:'green',width:'400px'}}>
        <h1>Layer One</h1>
        <Two data={props.data}></Two>
    </div>
  )
}

export default One