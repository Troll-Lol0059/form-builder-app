import React, { useState,useRef, useEffect } from 'react'
import { updateInput } from '../../../../../slices/inputSlice';
import { useDispatch,useSelector } from 'react-redux';
import { FaRegEdit , FaSave  } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";

function InputCustomizer({ id }) {
    const dispatch = useDispatch();
    // fecthes formData from the redux
    const formData = useSelector(state => state.inputs);
    // gets the current Input with help of ID
    const currentInput = formData.find(item => item.id === id);

    // TRACKS EDIT MODE
    const [editMode,setEditMode] = useState(false);

    // tracks the state of Form
    const [inputData, setInputData] = useState({
        title: currentInput?.title || 'Add Title Here !!',
        placeholder: currentInput?.placeholder || 'Click to Add Placeholder',
    });

    const labelRef = useRef(null);
    const inputRef = useRef(null);

    // handles Input Change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };


    // what happens if save is clicked
    const handleSave = () => {
        let payload = { id };
        payload.title = inputData.title;
        payload.placeholder = inputData.placeholder;

        if (payload.title || payload.placeholder) {
            dispatch(updateInput(payload));
        }
        setEditMode(null);
    }

    // use Effect to render a fresh form when ID is changed
    useEffect( () => {
        setInputData({
            title: currentInput?.title || 'Add Title Here !!',
            placeholder: currentInput?.placeholder || 'Click to Add Placeholder',
        })
    },[id])
    
    return (
        <div>
            <div>
                <div className='w-full space-y-6'>
                    <div ref={labelRef} className="w-full">
                        <input type='text'
                         name='title'
                         value={inputData.title}
                         onChange={handleInputChange}
                         className={`${editMode ? 'form-styleEdit w-full' : 'form-style w-full'}`}
                         readOnly={editMode ? false : true }
                        />
                    </div>

                    <div ref={inputRef} className="w-full">
                        <input type='text'
                         name='placeholder'
                         value={inputData.placeholder}
                         onChange={handleInputChange}
                         className={`${editMode ? 'form-styleEdit w-full' : 'form-style w-full'}`}
                         readOnly={editMode ? false : true }
                        />
                    </div>

                    <div className='flex gap-8'>
                        {/* Edit Button */}
                        <button onClick={() => setEditMode(true)} className='yellowButton flex items-center gap-3 font-normal'>
                            <span><FaRegEdit /></span>
                            <span>Edit</span>
                        </button>

                        {/* Save Button */}
                        <button onClick={() => handleSave() } className='yellowButton flex items-center gap-3 font-normal'>
                            <span><FaSave /></span>
                            <span>Save</span>
                        </button>

                        {
                            // cancel Edit Button
                            editMode &&(
                                <button onClick={ () => setEditMode(null) } className='yellowButton flex items-center gap-2 font-normal'>
                                    <span><FcCancel /></span>
                                    <span>Cancel Edit</span>
                                </button>
                            )
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default InputCustomizer




