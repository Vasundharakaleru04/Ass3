import React from 'react'
import './Styles.css'

function FunctionalComponent (props) {
    console.log(props)
    let applyStyle = props.apply ? 'heading':' '
    let inlineStyle ={
        color:'green',
        backgrounColor: 'yellow',
        fontSize:'30px'

    }
  return (
    <div>
      <h1 class={`${applyStyle} font-style`}>Welcome {props.clgName},
        {props.city}
      </h1>
      {props.children}
      <h2 style={inlineStyle}>Good learn</h2>
    </div>
  )
}


