import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

export class ParentComp extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
    name: "Aisha" 
   }
 }
 componentDidMount(){
    setInterval(() => {
        this.setState({
            name: "Aisha"
        })
    }, 2000);
 }


    render() {
    return (
      <div>
        <h1>ParentComp</h1>
        <p>The Parent comp is exported to main. It imports Pure and Reg</p>
        <p>The name "Aisha" is sent from Parent to others. </p>
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}

export default ParentComp