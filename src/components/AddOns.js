import React from 'react'

export default function AddOns() {
  return (
      <div>
          <h1>Pick add-ons</h1>
          <div className='instructions'>
             <p>Add-ons help enhance your gaming experience</p> 
          </div>

      <div className='addons-main-container'>
      <div className='addons-option-container'>
        <div className='addons-option-sub1'>
        <div>
          <input type='checkbox' />
        </div>
        <div>
          <span>Online service</span>
          <p>Access to multiplayer games</p>
          </div>
        </div>
        <div className='addons-option-sub2'><p>+$1/mo</p></div>

          </div><div className='addons-option-container'>
        <div className='addons-option-sub1'>
        <div>
          <input type='checkbox' />
        </div>
        <div>
          <span>Larger storage</span>
          <p>Extra 1TB of cloud save</p>
          </div>
        </div>
        <div className='addons-option-sub2'><p>+$2/mo</p></div>

      </div>
      
      <div className='addons-option-container'>
        <div className='addons-option-sub1'>
        <div>
          <input type='checkbox' />
        </div>
        <div>
          <span>Costumizable profile</span>
          <p>Custom theme on your phone</p>
          </div>
        </div>
        <div className='addons-option-sub2'><p>+$2/mo</p></div>

        </div>
          </div>
      
    </div>
  )
}
