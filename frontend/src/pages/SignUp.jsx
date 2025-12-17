import React from 'react'

function SignUp() {
  const primaryColor = "#ff4d2d";
  const hoverColor = "#e64323";
  const bgColor = "#fff9f9";
  const borderColor = "#ddd";
  

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4'style={{background:bgColor}}>
      <div className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-[1px]`} style={{border:`1px solid${borderColor}>`}}>
        <h1 className={`text-3xl font-bold mb-2`} style={{color:primaryColor}}>Vingo</h1>
        <p className='text-gray-600 mb-8'>Create your account to get started with delicious food deliveries</p>

        {/* fullName */}
        <div className='mb-4'>
          <label htmlFor="fullName" className='block text-gray-700 font-medium mb-1'>Full Name</label>
          <input type="text" className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500' placeholder='Enter your Full Name' style={{border: `1px solid ${borderColor}`}} />
        </div>

        {/* email */}
        <div className='mb-4'>
          <label htmlFor="email" className='block text-gray-700 font-medium mb-1'>Email</label>
          <input type="email" className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500' placeholder='Enter your Email' style={{border: `1px solid ${borderColor}`}} />
        </div>

        {/* mobile */}
        <div className='mb-4'>
          <label htmlFor="mobile" className='block text-gray-700 font-medium mb-1'>Mobile Number</label>
          <input type="mobile" className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500' placeholder='Enter your Mobile Number' style={{border: `1px solid ${borderColor}`}} />
        </div>
        

      </div>
    </div>
  )
}

export default SignUp
