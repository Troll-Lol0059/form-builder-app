import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSingleForm } from '../../../services/operations/courseDetailsAPI';
import { setEditForm,setFormData } from '../../../slices/steps';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import RenderSteps from '../createFormPage/steps/RenderSteps';


function EditCourse() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {formData} = useSelector( (state) => state.formSlice );

    useEffect( () => {
        const populateFormDetails = async() => {
            const result = await fetchSingleForm(id);
            if(result?.data.success){
                dispatch(setEditForm(true));
                dispatch(setFormData(result?.data?.data));
            }
        }
        populateFormDetails();
    }, [])

    return (
        <div className='text-white'>
            <h1>Edit Form</h1>
            <div>
                {
                    formData ? ( <RenderSteps /> ) :
                    (<p>Form Not Found</p>)
                }
            </div>
        </div>
      )
}

export default EditCourse