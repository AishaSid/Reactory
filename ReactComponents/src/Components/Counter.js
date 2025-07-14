import React, { Component } from 'react'
import UpdatedComponent from './HigherOrder';

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
      <p>{this.props.name} Count: {count} </p>
      <p>It is also exported differently ( as a param in HR comp) </p>
      </div>
    )
  }
}

export default UpdatedComponent(Counter)