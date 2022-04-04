import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
const Imageslider = () => {
    
const Images=[
  {url :"gce.png"},
  {url :"program1.jpg"},
  {url :"program2.jpg"},
  {url :"program3.jpg"},
   
]

  return (
    <div >Imageslider
        <SimpleImageSlider
        width={269}
        height={204}
        images={Images}
        showBullets={true}
        showNavs={true}
        slideDuration={1}
        />
    </div>
  )
}

export default Imageslider