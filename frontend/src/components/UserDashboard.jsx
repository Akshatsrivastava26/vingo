import React from 'react'
import Nav from './Nav'

function UserDashboard() {
  return (
    <div className='w-full min-h-screen bg-[#fff9f6] flex flex-col items-center'>
      <Nav/>
      <div className='w-full pt-24 px-5'>
        <h1 className='text-2xl font-bold'>User Dashboard</h1>
      </div>
    </div>
  )
}

export default UserDashboard
