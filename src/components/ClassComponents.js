import React, { Component } from 'react';
import './formStyles.css'

class ClassComponents extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'message'
        }

    }
    changeMessage = () => {
        this.state ={
           message: 'changeMessage'
        }
    }
    render() {
        return (
            <div>
                <h1 className='heading1'>
                    {this.state.message}
                </h1>
                <button onClick={this.changeMessage}>Click</button>
            </div>
        );
    }
}

export default ClassComponents;
