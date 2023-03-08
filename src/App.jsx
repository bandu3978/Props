import React from "react";
import Functionprops from "./PROPS/Functionprops";
import Imageprops from "./PROPS/Imageprops";
import PropsClass from "./PROPS/PropsClass";

import IMG from "./PROPS/abc.jpg"

const App=()=>
{
  return(
  
    <>
    <PropsClass data1="class props"/>
    <Functionprops data2="function props"/>
        <Imageprops data3={IMG}/>
    
 </>
 
  )
}
export default App