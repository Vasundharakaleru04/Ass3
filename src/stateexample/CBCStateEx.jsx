import React, { Component } from 'react'

export default class CBCStateEx extends Component {
    constructor(){
        super();
        this.state={
          
            users:["varun", "vassu", "bubbur"],
            num:4,

        };
    }
    changeNumber=()=>{
        this.setState({num:44})
    }
  render() {
    console.log(this);
    return (
      <div>
       {this.state.users.map((user, i) =>{
         return <li key={i}>{user} </li>
       })
       }
       <h1>{this.state.num}</h1>
       <button onClick={this.changeNumber}>Change Number</button>
      </div>
    )
  }
}

