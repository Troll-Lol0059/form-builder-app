import React from 'react'
import IconBtn from './IconBtn';

export default function Modal({ modalData }) {
    return (
      <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
        <div className="w-11/12 max-w-[600px] rounded-lg border border-richblack-400 p-6">

          <div className='flex justify-end font-bold text-[20px] text-richblue-800 cursor-pointer px-2 py-2'
            onClick={modalData.btnHandler} >
            {modalData.btnText}
          </div>

          <div>
            {modalData.renderComponent}
          </div>
        </div>
      </div>
    )
  }
  