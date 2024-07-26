import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setStep } from '../../../../../slices/steps';
import { useDispatch } from 'react-redux';
import FormActions from '../../../../common/FormActions';

function FormStyler() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formData = useSelector((state) => state.inputs);
    const title = useSelector((state) => state.formSlice).formTitle;

    // handles next button
    const nextStepHandler = () => {
        // if there is no Input Added dont show next button
        dispatch(setStep(3));
    }

    return (
        <div className='w-[90%] border border-[#3b82f6] py-6 px-8 rounded-md space-y-4 mx-auto my-8'>
            <div className='section_heading'>
                Preview Your Form Here :
            </div>

            <div className='text-richblack-50 text-[36px] text-center underline'>
                <h2>{title}</h2>
            </div>

            <div className='space-y-4'>
                {
                    formData?.map((item,index) => (
                        <div key={item.id} className='flex gap-4 items-center'>
                            <div className='text-richblack-50 font-semibold text-[18px]'>
                                {index+1}.
                            </div>

                            <div className='text-richblack-50 font-semibold text-[18px]'>
                                {item.title}
                            </div>

                            <div>
                                <input type={item.type} placeholder={item.placeholder} 
                                className='rounded-lg bg-richblack-700 p-2 text-[16px] leading-[24px] text-richblack-100 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none'
                                readOnly />
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='flex gap-4 py-8 items-center'>
                <button className='blackButton hover:bg-yellow-50 hover:text-black'>Reset</button>
                <button className='blackButton hover:bg-yellow-50 hover:text-black'>Submit</button>
                <div className='text-yellow-200'>(These 2 buttons will be added to your form automatically)</div>
            </div>

            <FormActions btn1Text={'Back'}
                           btn2Text={'Next'} 
                           btn1Handler={ () => dispatch(setStep(1)) }
                           btn2Hanlder={ () => nextStepHandler() }
            />

        </div>
    )
}

export default FormStyler;