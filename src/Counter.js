import React, { Component } from 'react'

export class Counter extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    IncrementClick = ()=>{
        this.setState({count : this.state.count + 1});
    }
 
    render() {
        const { count } = this.state;
    return (
      <div>
        <button onMouseEnter={this.IncrementClick}>Increment</button>
      <p>Count: {count} </p>
      </div>
    )
  }
}

export default Counter