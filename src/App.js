import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menuu'
import AboutUs from './components/aboutus'
import ContactUsForm from './components/contact'
import Footer from './components/Footer'
import './assets/style.css'

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Menu />
      <AboutUs />
      <ContactUsForm />

      {/* Your other components and content go here */}
      <Footer />
    </div>
  )
}

export default App
