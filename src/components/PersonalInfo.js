import React from 'react'
import { useState } from 'react';

export default function PersonalInfo({ name, email, number, updateName }) {
    const [valid, setvalid] = useState(true)
    const [error, seterror] = useState('')
    const [EmailValid, setEmailvalid] = useState(true)
    const[emailError, setemailError] = useState('')
    const [numberValid, setNumbervalid] = useState(true)
    const [numberError, setnumberError] = useState('')


    function saveName(event) {
        
      updateName((prevName) =>
           ({ ...prevName, name:event.target.value})
        )

        if (event.target.value === '') {
            setvalid(!valid);
            seterror('field required')
        }
        else if (/\d/.test(event.target.value)) {
            setvalid(!valid);
            seterror('no numbers')
        }
        else if (event.target.value.length > 20) {
            setvalid(!valid);
            seterror('input must not exceed 20')
        }
        else {
            seterror('')
            setvalid(true)
        }
     
    }
    function saveEmail(event) {
      updateName((prevName) =>
           ({ ...prevName, email:event.target.value})
        )

        if (event.target.value === '') {
            setEmailvalid(!EmailValid)
            setemailError('field required')
        }
        else if (/!^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(event.target.value)) {
            setEmailvalid(!EmailValid)
            setemailError('incorrect email')
        }
        else {
            setemailError('')
            setEmailvalid(true)
        }
        




    
    }function saveNumber(event) {
      updateName((prevName) =>
           ({ ...prevName, number:event.target.value})
        )
        if (event.target.value === '') {
            setNumbervalid(!numberValid)
            setnumberError('field required')
        }
        else if (!/^[0-9]*$/.test(event.target.value)) {
            setNumbervalid(!numberValid)
            setnumberError('No letters')
        }
        
        else if (event.target.value.length > 11) {
            setNumbervalid(!numberValid)
            setnumberError('Numbers must not be greater than 11')
        }
        else {
            setNumbervalid(true)
            setnumberError('');
       }
    }
  return (
      <div>
          <h1>Personal info</h1>
          <div className='instructions'>
              <p>Please provide your name, email address, and phone number</p>
          </div>
          <div className='personal-info-form'>
              <div className='titleNdInput'>
                  <label>Name</label>
                  <input type='text' placeholder='e.g Olaniyi Arokoyu' value={name} onChange={saveName} className={valid ? 'personal-info-input' : 'personal-info-input_active'} />
                  <p>{error}</p>
                  
              </div>
              
              <div className='titleNdInput'>
                  <label>Email Address</label>
                  <input type='text' placeholder='e.g neymarjr10@gmail.com' value={email} onChange={saveEmail} className={EmailValid ? 'personal-info-input' : 'personal-info-input_active'} />
                  <p>{emailError}</p>
              </div>
              
              <div className='titleNdInput'>
                  <label>Phone Number</label>
                  <input type='text' placeholder='e.g +2349045678923' value={number} onChange={saveNumber} className={numberValid ? 'personal-info-input' : 'personal-info-input_active'} />
                  <p>{numberError}</p>
                  
              </div>

              </div>
    </div>
  )
}

