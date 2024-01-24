import React from 'react'
import Carousel_section from '../Carousel/Carousel'
import './CarouselPage.css'
function CarouselPage() {
  return (
    <div className='carousel-outerdiv'>
      <div className='carousel-innerdiv'>
        <Carousel_section/>
        <div >
            <img className='carousel-img' src="https://www.holagala.in/_next/image?url=%2Fpattern.png&w=1920&q=75" alt="" />
        </div>
      </div>
    </div>
  )
}

export default CarouselPage
