import React from 'react';

// Components
import FC from './Components/FunctionalComp';
import CC from './Components/ClassComp';
import { ClassComp1 } from './Components/ClassComp'; 
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';

//Props
import CProps from './ClassProps/cProps';


function App() {
  return <div>
     {/* App Components */}
    <h1>Welcome to the React Components</h1>
  <p>Components return HTML</p>
  <FC></FC>
  <CC></CC>
  <ClassComp1></ClassComp1>
  <Click></Click>
  <Counter></Counter>
  <p>App imports Click and Counter </p>
  <ParentComp></ParentComp>
  <hr />
  {/* Props */}
<h1>Class Props</h1>
<CProps name="Aisha Siddiqa"></CProps>
<CProps name="Asim Khan"></CProps>
  <hr />
   {/* States */}
  
  
  </div>;
}

export default App;
