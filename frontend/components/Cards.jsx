import React from 'react'
import Navbar from './Navbar'

const Cards = (props) => {

  return (
    
 
 
    // <a href={props.videoUrl} >
      <div className="card"
      onClick={()=>{
        
        props.view(true, props.videoUrl)
      }} 
      >
  
  <img className="thumbnail" src={props.thumbnail}/> 
      <h2 className="video-title">{props.title}</h2>
  
      {/* <iframe width="420" height="315" src={props.videoUrl}>
</iframe> */}
    
      
        {/* <div className="card">
        <img className="thumbnail" src="../src/assets/react.svg"/>
      <h2 className="video-title">title</h2>
        </div>
        <div className="card">
        <img className="thumbnail" src="../src/assets/react.svg"/>
      <h2 className="video-title">title</h2>
        </div>
        <div className="card">
        <img className="thumbnail" src="../src/assets/react.svg"/>
      <h2 className="video-title">title</h2>
        </div> */}
       </div>
      
      //  {/* </a> */}
  )
}

export default Cards
