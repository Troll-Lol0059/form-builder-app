import React, { useState,useRef, useEffect } from 'react'
import { updateInput } from '../../../../../slices/inputSlice';
import { useDispatch,useSelector } from 'react-redux';
import { FaRegEdit , FaSave  } from "react-icons/fa";

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

        console.log(payload);
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
                {id}
            </div>

            <div>
                <div>
                    <div ref={labelRef} className="w-full">
                        <input type='text'
                         name='title'
                         value={inputData.title}
                         onChange={handleInputChange}
                         className={`${editMode ? 'w-full rounded-lg p-2 border-b border-gray-300' : 'form-style2'}`}
                         readOnly={editMode ? false : true }
                        />
                    </div>

                    <div ref={inputRef} className="w-full">
                        <input type='text'
                         name='placeholder'
                         value={inputData.placeholder}
                         onChange={handleInputChange}
                         className={`${editMode ? 'w-full rounded-lg p-2 border-b border-gray-300' : 'form-style2'}`}
                         readOnly={editMode ? false : true }
                        />
                    </div>

                    <div className='flex gap-2'>
                        {/* Edit Button */}
                        <button onClick={() => setEditMode(true)}>Edit</button>
                        {/* Save Button */}
                        <button onClick={() => handleSave() }>Save</button>
                    </div>
                </div>

                <div>

                </div>
            </div>

        </div>
    )
}

export default InputCustomizer




