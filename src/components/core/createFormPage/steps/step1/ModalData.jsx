import React from 'react';
import { IoIosAddCircle } from "react-icons/io";
import IconBtn from '../../../../common/IconBtn';
import inputOptions from '../../../../../data/inputOptions';
import { useDispatch,useSelector } from 'react-redux';
import { addInput } from '../../../../../slices/inputSlice';


function ModalData( {setShowModal,setCurrentInput} ) {
    const dispatch = useDispatch();
    const formData = useSelector(state => state.inputs);
   
    const fieldTypeHander = (type) => {
        // return when there are more than 20 inputs
        if(formData.length > 20){
            alert('Cannot Add More Than 20 Inputs');
            return;
        }
        // generate unique ID
        const uniqueId = Date.now();
        // dispatch the data to redux slice
        dispatch(addInput({ id: uniqueId, type: type, placeholder: '', title: '' }));
        // setting this as current slice so that customize section can render the input and placeholder
        setCurrentInput(uniqueId);
        // close the modal
        setShowModal(null);
    };

    return (
        <div className='text-richblack-900 flex flex-col gap-4'>
            {inputOptions?.map((item) => (
                <IconBtn
                    key={item.id}
                    text={item.type}
                    children={<IoIosAddCircle />}
                    customClasses={'w-fit capitalize flex items-center gap-2 text-white text-[16px] px-6 py-2 rounded-md font-semibold bg-black hover:scale-95 hover:bg-yellow-500 transition-all duration-200'}
                    onclick={() => fieldTypeHander(item.type)}
                />
            ))}
        </div>
    )
}

export default ModalData