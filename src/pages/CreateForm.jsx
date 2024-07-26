import React from 'react'
import RenderSteps from '../components/core/createFormPage/steps/RenderSteps';

function CreateForm() {
  return (
    <div>
        <section className='p-8 my-4 text-center space-y-8'>
            <h1 className='section_heading'>Create A Custom Form</h1>
            <div className='text-richblack-5 text-[22px] font-medium'>
               Please completed the three step process to create a form
            </div>
        </section>

        <section>
            <RenderSteps />
        </section>
    </div>
  )
}

export default CreateForm;