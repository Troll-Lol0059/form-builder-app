import React from 'react'

// required components
import IconBtn from '../components/common/IconBtn';

// required Hooks
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  const navigateToCreateForm = () => {
    navigate('/form/create')
    return;
  }

  return (
    <div>
      <section className='p-8 my-4 text-center space-y-8'>
        <h1 className='section_heading '>
          Welcome to Custom Form Builder Application
        </h1>

        <p className='text-richblack-5 text-[1rem] font-medium'>
          Please Choose a option to start your journey....
        </p>

      </section>

      <section>

        <div className='flex justify-center items-center gap-4'>
          <IconBtn text={"View Created Forms"} outline="false" 
          customClasses={`text-white text-center text-[16px] px-6 py-2 rounded-md font-bold bg-[#14279B] hover:scale-95 transition-all duration-200`}
          />
          
          <IconBtn text={"Create a Form"} outline="false" 
          customClasses={`text-white text-center text-[16px] px-6 py-2 rounded-md font-bold bg-[#14279B] hover:scale-95 transition-all duration-200`}
          onclick={navigateToCreateForm} 
          />
          
        </div>

      </section>

    </div>
  )
}

export default Homepage;