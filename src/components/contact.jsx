// ContactUsForm.js

import React, { useState } from 'react'
import '../assets/style.css'

const ContactUsForm = () => {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', {
      fullName,
      phone,
      address,
      email,
      description,
    })

    // Optionally, you can clear the form fields after submission
    setFullName('')
    setPhone('')
    setAddress('')
    setEmail('')
    setDescription('')
  }

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
      <div className='form-row'>
        <div className='form-group'>
          <label htmlFor='fullName'>Full Name</label>
          <input
            type='text'
            id='fullName'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone</label>
          <input
            type='text'
            id='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className='form-row'>
        <div className='form-group'>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            id='address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className='form-row'>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className='form-row'>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default ContactUsForm
