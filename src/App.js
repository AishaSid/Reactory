import React from 'react';
import FC from './Components/FunctionalComp';
import CC from './Components/ClassComp';
import { ClassComp1 } from './Components/ClassComp'; 
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';

function App() {
  return <div>
    <h1>Welcome to the React Components</h1>
  <p>Components return HTML</p>
  <FC></FC>
  <CC></CC>
  <ClassComp1></ClassComp1>
    <p>App imports Click and Counter</p>
  <Click></Click>
  <Counter></Counter>

  <ParentComp></ParentComp>
  </div>
  ;
}

export default App;
