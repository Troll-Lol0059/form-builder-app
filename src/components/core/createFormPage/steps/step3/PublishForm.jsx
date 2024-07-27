import React from 'react'
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { createForm } from '../../../../../services/operations/courseDetailsAPI';
import { setFormHeading } from '../../../../../slices/steps';
import { resetInputs } from '../../../../../slices/inputSlice';
import { useNavigate } from 'react-router-dom';

function PublishForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formData = useSelector((state) => state.inputs);
    const title = useSelector((state) => state.formSlice).formTitle;

    // handle the data submission to backend
    const handleSubmit = async(event) => {
        event.preventDefault();
        if (!title || formData.length === 0) {
            toast.error("Form Name and Components are required");
            return;
        }

        const formDataToAdd = {
            title,
            formData,
            status: "Published"
        };

        const result = await createForm(formDataToAdd);
        if (result) {
            // Reset form
            dispatch(resetInputs())
            dispatch(setFormHeading('Untitled'))
            navigate(-1);
            toast.success("Form created successfully");
        }
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='my-12 text-center'>
                <p className='text-richblack-5 text-[20px] font-semibold'>
                    Publish Your Form By Clicking the button Below
                </p>
            </div>

            <div>
                <button className='yellowButton' onClick={(event) => handleSubmit(event)}>
                    Publish Form
                </button>
            </div>
        </div>
    )
}

export default PublishForm;