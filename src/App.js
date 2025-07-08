import React from 'react';
import FC from './FunctionalComp';
import CC from './ClassComp';
import { ClassComp1 } from './ClassComp'; 
import Click from './Click';
import Counter from './Counter';

function App() {
  return <div>
    <h1>Welcome to the React Components</h1>
  <p>Components return HTML</p>
  <FC></FC>
  <CC></CC>
  <ClassComp1></ClassComp1>
  <Click></Click>
  <Counter></Counter>
  </div>
  ;
}

export default App;
