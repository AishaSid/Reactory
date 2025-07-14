import React , {Component} from "react";
import UpdatedComponent from './HigherOrder';

export class Click extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    UpdateClick = ()=>{
        this.setState({count : this.state.count + 1});
    }

    render() {

        const {count} = this.state ;

        return (
            <div>
                <h1>Click Component: High order Component</h1>
                <button onClick={this.UpdateClick}>Click Me!</button>
                <p>{this.props.name} have clicked {count} times</p>
                <p> click imports component from higherOrder.js and uses its variable </p>
           </div>
        );
    }
}

export default UpdatedComponent(Click);