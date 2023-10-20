import React from 'react'
// import { useState } from 'react'

export default function SelectPlan({pick,
    setpick,
    anotherPick,
    setanotherPick,
    lastPick,
    setlastPick,
    changeDuration,
    setchangeDuration}) {
    
    

    function change() {
        return setchangeDuration(!changeDuration)
    }

    function lastSelect() {
        return setlastPick(!lastPick);
    }
    function anotherSelect() {
        return setanotherPick(!anotherPick)
    }
    function select() {
        return setpick(!pick)
    }
  return (
      <div>
          <h1>Select plan</h1>
          <div className='instructions'>
             <p>You have the option of monthly or yearly billing.</p> 
          </div>
          
          <div className='plans-container'>
              <div className= {pick ? 'plans' : 'plans_picked'} onClick={select}> 
                  <div className='sub-plans-1'>
                  <img src='/images/icon-arcade.svg' alt='icon ' />
                  </div>

                  <div className='sub-plans-2'>
                      <span>Arcade</span>
                      <p>${changeDuration ? 9 : 90}/{changeDuration ? 'mo' : 'yr'}</p>
                      <p className='bonus-text'>{changeDuration ? '' : '1 month free'}</p>
                  </div>
              </div>
              
              <div className= {anotherPick ? 'plans' : 'plans_picked'} onClick={anotherSelect}>
                  <div className='sub-plans-1'>
                  <img src='/images/icon-advanced.svg' alt='icon ' />
                  </div>

                  <div className='sub-plans-2'>
                      <span>Advanced</span>
                      <p>${changeDuration ? 12 : 120}/{changeDuration ? 'mo' : 'yr'}</p>
                      <p className='bonus-text'>{changeDuration ? '' : '2 months free'}</p>
                  </div>
              </div>
              
              <div className= {lastPick ? 'plans' : 'plans_picked'} onClick={lastSelect}>
                  <div className='sub-plans-1'>
                  <img src='/images/icon-pro.svg' alt='icon ' />
                  </div>

                  <div className='sub-plans-2'>
                      <span>Pro</span>
                      <p>${changeDuration ? 15 : 150}/{changeDuration ? 'mo' : 'yr'}</p>
                      <p className='bonus-text'>{changeDuration ? '' : '3 months free'}</p>
                  </div>
              </div>

              <div className='changeDur-Btn-con'>
                  <button className='changeDur-Btn' onClick={change}>{changeDuration ? 'Yearly' : 'Monthly'}</button>
                  
              </div>
          </div>
          
    </div>
  )
}
