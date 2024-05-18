import React from 'react'
import ArrowDown from '../assets/arrow-down.png'

const ReportCard = () => {
  return (
    <>
      <div className='bg-white py-6 px-6 rounded-xl w-96'>
        <div>
          <h3 className='text-xl text-center'>Let us know about the <b>Issue</b></h3>
          <h3 className='text-center text-xl'>you are facing right now!</h3>
        </div>
        <div className='border w-full mt-3'></div>
        <div className='mt-4'>
          <h3 className='font-semibold mb-2'>Choose a section</h3>
          <div className='flex justify-between bg-gray-200 py-2 px-4 rounded-lg'>
            <h3>Interview Questions</h3>
            <img src={ArrowDown} alt='arrow-down' />
          </div>
          <div className='mt-4'>
            <h3 className='font-semibold mb-2'>Describe the issue in detail</h3>
            <textarea className='w-full h-32 bg-gray-200 outline-none rounded-lg p-4'></textarea>
          </div>
          <div className='flex justify-end mt-2'>
            <button className='bg-gray-500 text-white w-20 py-1 px-4 rounded-lg'>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReportCard