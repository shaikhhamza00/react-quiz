import React from 'react'
import hero from '../assets/img/hero.jpg'

const HeroSection = () => {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1>Welcome to X Technologies</h1>
        <p>Your one-stop solution for innovative technologies.</p>
      </div>
      <img src={hero} alt='Hero Image' className='hero-image' />
    </section>
  )
}

export default HeroSection
