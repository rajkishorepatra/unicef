import React from 'react';
import mascot from '../img/mascot.png';

function JoinUs() {
  return (
    <>
      <div className='joinUs text-center'>
        <h1>Odisha COY 2023</h1>
        <h3>Odisha Conference of Youth 2023</h3>
        <h2 className='text-primary'>ACTION FOR THE CLIMATE</h2>
        <br />
        <h4>9-11 AUGUST, 2023</h4>
        <h4>BHUBANESWAR, ODISHA</h4>
      </div>
      <div className='d-flex justify-content-evenly mobMascot'>
        <img src={mascot} alt="mascot" />
        <div className='formJoin my-auto'>
            <input type='text' placeholder='Your Name...' required  className='my-2'/>
            <input type='email' placeholder='Your Email...' required className='my-2'/>
            <input type='text' placeholder='Your Number...' required className='my-2'/>
            <input type='submit' value="Join Us"/>
        </div>
      </div>
    </>
  )
}

export default JoinUs