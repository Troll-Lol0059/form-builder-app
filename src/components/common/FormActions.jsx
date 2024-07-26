import React from 'react';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import { setStep } from '../../slices/steps';
import { useDispatch } from 'react-redux';
import { resetInputs, } from '../../slices/inputSlice';
import { useNavigate } from 'react-router-dom';


function FormActions( {btn1Text,btn1Handler,btn2Text,btn2Hanlder} ) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const discardHanlder = () => {
        dispatch(setStep(1));
        dispatch(resetInputs());
        navigate('/');
        return;
    }


    return (
        <div className='border border-yellow-50 py-4 space-y-4'>
            <div className='text-richblack-50 text-[22px] text-center'>
                Form Actions
            </div>

            <div className='text-black flex items-center justify-center gap-16 text-[1rem]'>
                <button onClick={btn1Handler} className='flex gap-2 px-4 py-1 bg-yellow-100 items-center rounded-md'>
                    <span><IoIosArrowBack /></span>
                    <span>{btn1Text}</span>
                </button>

                <button onClick={btn2Hanlder} className='flex gap-2 px-4 py-1 bg-yellow-100 items-center rounded-md'>
                    <span>{btn2Text}</span>
                    <span><IoIosArrowForward /></span>
                </button>

                <button onClick={ () => discardHanlder() } className='flex gap-2 px-4 py-1 bg-yellow-100 items-center rounded-md'>
                    <span>Discard Form</span>
                    <span></span>
                </button>
            </div>
        </div>
    )
}

export default FormActions;