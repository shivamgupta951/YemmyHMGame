import React from 'react'
import sf_fight from "../assets/sf_fight.mp4"

const Video = () => {
  return (
    <div>
      <video 
        src={sf_fight} 
        autoPlay 
        loop           
        playsInline
        className='w-[400px] rounded-md'
      />
    </div>
  )
}

export default Video
