import React, {useState} from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
function ForgotPassword() {
  const [step, setStep] = React.useState(1);
  return (
    <div className='flex w-full items-center justify-center min-h-screen p-4 bg-[#fff9f6]'>
      <div className='bg-white rounded-xl shadow-lg w-full max-w-md p-8'>
        <div className='flex items-center gap-4 mb-4'>
          <IoIosArrowRoundBack size={30} className='text-[#ff4d2d]'/>
         <h1 className='text-3xl font-bold text-center text-[#ff4d2d]'>Forgot Password</h1>
        </div>

      </div>
    </div>
  )
}
export default ForgotPassword;