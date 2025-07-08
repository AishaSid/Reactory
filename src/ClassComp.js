import React from 'react';

export class ClassComp extends React.Component {
    render() {
        return (
        <div>
            <h1>Class Components</h1>
            <p>Multiple Comp from 1 .js file,"use export with class class decl"</p>
        </div>
        );
    }
}

export class ClassComp1 extends React.Component {
    render() {
        return (
        <div>
            <p>ClassComp1: This is not exported as default  </p>
        </div>
        );
    }
}

export default ClassComp;