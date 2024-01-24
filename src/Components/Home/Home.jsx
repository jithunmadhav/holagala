import React from 'react'
import Body from '../Body/Body'
import CarouselPage from '../CarouselPage/CarouselPage'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <>
      <Navbar/>
      <CarouselPage/>
      <Body/>
      <Footer/>
    </>
  )
}

export default Home
