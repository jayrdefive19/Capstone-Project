import './slideshow.css'
import { useState } from "react";
import Pic1 from '../../image/1.jpg'
import Pic2 from '../../image/2.jpg'
import Pic3 from '../../image/bgimage.png'


const Slideshow = () => {
 
  return(
    <div className='container-fluid'>
      <image src={Pic3} style={{width:'100px', height: '100px'}}/>
    </div>
  )
}

export default Slideshow;