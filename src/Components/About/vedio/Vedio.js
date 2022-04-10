import React from 'react'
import ReactPlayer from 'react-player'
import './Vedio.css'
const Vedio = () => {
  return (
    <div>
      <center>
        <ReactPlayer
        playIcon={true}
       width='400px'
        height='250px'
        url='https://youtu.be/2Xo9UhHK5bg'/>
        </center>
    </div>
  )
}

export default Vedio