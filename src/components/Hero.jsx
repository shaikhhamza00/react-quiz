import React from 'react'
import hero from '../assets/img/image 1.png'

const HeroSection = () => {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <div className='text-container'>
          <p>
            Indulge in a Symphony of Flavors Welcome to a world where the aroma
            of freshly baked wonders captivates your senses. Our master bakers
            craft each creation with passion, using only the finest ingredients
            to ensure every bite is pure delight.
          </p>
          <p>
            From flaky croissants to decadent cakes, experience the epitome of
            taste and craftsmanship. Whether it's a special occasion or a
            craving for the extraordinary, our bakery offers a haven for your
            palate. Elevate your moments with the magic of our oven-fresh
            delights. Your journey to exceptional taste begins here.
          </p>
        </div>
        <div className='image-container'>
          <img src={hero} alt='Hero Image' className='hero-image' />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
