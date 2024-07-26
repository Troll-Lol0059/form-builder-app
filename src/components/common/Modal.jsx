import React from 'react'
import IconBtn from './IconBtn';

export default function Modal({ modalData }) {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[600px] rounded-lg border border-[#3b82f6] p-6 space-y-8">

        <div className='flex justify-between items-center text-richblack-50 text-[24px] font-semibold'>
          <div className=''>
            Please Select a Input Type to add:
          </div>

          <div className='font-bold text-[red] cursor-pointer hover:bg-yellow-50 hover:px-2'
            onClick={modalData.btnHandler} >
            {modalData.btnText}
          </div>
        </div>

        <div>
          {modalData.renderComponent}
        </div>
      </div>
    </div>
  )
}
