import React from 'react'
import { useState } from 'react'
import PersonalInfo from './PersonalInfo';
import SelectPlan from './SelectPlan';
import AddOns from './AddOns';
import Summary from './Summary';
import Thankyou from './Thankyou';

export default function Formcontent() {
  const [page, setpage] = useState(0);
  const [formData, setformData] = useState({
    name: '',
    email: '',
    number: '',
  })

  const [pick, setpick] = useState(true);
  const [anotherPick, setanotherPick] = useState(true);
    const [lastPick, setlastPick] = useState(true)
    const [changeDuration, setchangeDuration] = useState(true)
  // const FormTiltles = ['personal info', 'select plan', 'add ons', 'summary']
  function nextPage() {
    return setpage(currPage => currPage + 1);
  }
  function previousPage() {
    return setpage(currPage => currPage - 1);
  }

  
  

  const pageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo
        name={formData.name}
        email={formData.email}
        number={formData.number}
        updateName={setformData} />
    }
    else if (page === 1) {
      return <SelectPlan
      pick={pick}
      setpick={setpick}
      anotherPick={anotherPick}
      setanotherPick={setanotherPick}
      lastPick={lastPick}
      setlastPick={setlastPick}
        changeDuration={changeDuration}
        setchangeDuration={setchangeDuration} />
    }
    else if (page === 2) {
      return <AddOns />
    }
    else if (page === 3) {
      return <Summary
        name={formData.name}
        email={formData.email}
        number={formData.number}
        updateName={setformData}/>
    }
    else {
      return <Thankyou />
    }
  };

  return (
    <div>
      <div className='image-back'>
      <img src='/images/bg-sidebar-mobile.svg' alt='Background pic' />
      </div>
      <div className='form'>
        <div className='progress-nums'>
          <div className= {page === 0 ? 'nums_active' : 'nums'}>1</div>
          <div className={page === 1 ? 'nums_active' : 'nums'}>2</div>
          <div className={page === 2 ? 'nums_active' : 'nums'}>3</div>
          <div className={page === 3 ? 'nums_active' : 'nums'}>4</div>
        </div>
        <div className='form-container'>
          <div className='body'>{pageDisplay()}</div>
          <div className={page === 4 ? 'footer_active' : 'footer'}>
            <button
              disabled = {page === 0}
              onClick={previousPage}>Go back</button>
            <button
              disabled = {page === 4}
              onClick={nextPage}>{page === 3 ? 'confirm' : 'next page'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
