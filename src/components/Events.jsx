import React from 'react'
import CardEvent from './CardEvent'


function Events() {
  return (
    <>
      <div className='event'>
        <h1 className='text-center'>Our Events</h1>
        <div className='cards'>
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
        </div>
      </div>
    </>
  )
}

export default Events