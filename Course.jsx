import React from "react";

const Course=(props)=>
{
  // if(props.courseDetails.courseAvail===true)
  // {
  //   return(
  //     <>
  //     <h1>{props.courseDetails.courseName}</h1>
  //     <h1>{props.courseDetails.courseDuration}</h1>
  //     <button style={{color:"green"}}>AVAILABLE</button>
  //     </>
  //   )
  // }
  // else
  // {
  //   return(
  //     <>
  //     <h1>{props.courseDetails.courseName}</h1>
  //     <h1>{props.courseDetails.courseDuration}</h1>
  //     <button style={{color:"red"}}>NOT AVAILABLE</button>
  //     </>
  //   )

  // }
  return(
  props.courseDetails.courseAvail===true?
    <div style={{justifyContent:"center",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center"}}>
    <h1>{props.courseDetails.courseName}</h1>
    <h1>{props.courseDetails.courseDuration}</h1>
    <button style={{color:"black",
                    backgroundColor:"green" ,
                    borderRadius:"25px",
                    width:"100px",
                    height:"40px",
                    border:"none"}}>AVAILABLE</button>
    </div>
  :<div style={{justifyContent:"center",
  display:"flex",
  flexDirection:"column",
  alignItems:"center"
}}>
  <h1>{props.courseDetails.courseName}</h1>
  <h1>{props.courseDetails.courseDuration}</h1>
  <button style={{color:"red"}}>NOT AVAILABLE</button>
  </div>
  )

}
export default Course;