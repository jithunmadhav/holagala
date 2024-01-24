import React from 'react'
import './Body.css'

function Body() {
  return (
    <div  className='outer-body'>
      <div>
        <button className='fixed-buy-button'>Buy Tickets</button>
        <h2 className='body-h2'>HOLA GALA</h2>
        <p className='body-p'>Step into the vibrant world of HOLA GALA, Kerala's most awaited festival, where the theme echoes a profound message: #JustStepOut. In a world where 90% of our lives are spent indoors, it's time to rekindle our connection with nature. We are products of nature, embedded in our genes to thrive outdoors. Yet, we have become The Indoor Generation, detached from the world outside. Now, HOLA GALA beckons us to break free from the confines of our indoor lives and embrace the light of the day and the cool of the night.</p>
        <div className='img-div'>
        <img className='body-img' src="https://www.holagala.in/_next/image?url=%2Fimage1.png&w=1920&q=75" alt="" />
        </div>
        <h2 style={{ marginBottom:'90px' }} className='body-h2'>INSIDE GALA</h2>
        <p className='body-p2'>Music band, Cultural programs, Workshop, Hip hop, Zumba, Classical, Art gallery, Open mic, Solo performance Gazals</p>
        <p style={{ marginTop:'-10px' }}  className='body-p2'>and sufi, Hula hoop, Slackline, Mentalism</p>
        <div style={{ display:'flex', justifyContent:'center' }}>
        <div className='circle-outerdiv'>
            <div className='inner-circle1'>
              <p className='inner-circle-p1'>100+</p>
              <p className='inner-circle-p2'>Sessions</p>
            </div>
            <div className='inner-circle2'>
            <p className='inner-circle-p1'>50+</p>
              <p className='inner-circle-p2'>Artists</p>
            </div>
            <div className='inner-circle3'>
            <p className='inner-circle-p1'>100+</p>
              <p className='inner-circle-p2'>Workshops</p>
            </div>
            <div className='inner-circle4'>
            <p className='inner-circle-p1'>100+</p>
              <p className='inner-circle-p2'>Sessions</p>
            </div>
        </div>
        </div>
        <h2 className='body-h2'>PARTNERS & SPONSORS</h2>
        <div className='sponser-img-div'>
          <img  className='sponser-img1' src="https://www.holagala.in/_next/image?url=%2Fprofirst.png&w=256&q=75" alt="" />
        </div>
        <div className='sponser-img-div'>
          <img className='sponser-img2' src="https://www.holagala.in/_next/image?url=%2Fpartners.png&w=1920&q=75" alt="" />
        </div>
          
      </div>
    </div>
  )
}

export default Body
