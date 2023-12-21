import React from 'react'

const CardView = (props) => {
    console.log(props.videoUrl)
  return (

    <div className="videoView">
      <iframe width="420" height="600" src={props.videoUrl} >
</iframe>
    </div>
  )
}

export default CardView
