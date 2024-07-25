import React from 'react'
import RenderSteps from '../components/core/createFormPage/steps/RenderSteps';

function CreateForm() {
  return (
    <div>
        <section>
            <h1>Create A Custom Form</h1>
            <div>
                Write instructions here or Sub Heading Here
            </div>
        </section>

        <section>
            <RenderSteps />
        </section>
    </div>
  )
}

export default CreateForm;