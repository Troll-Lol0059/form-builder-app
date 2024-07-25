import React from 'react';
import { useSelector } from 'react-redux';


function InputCustomizer({ id }) {
    const formData = useSelector(state => state.inputs);
    const currentInput = formData.find((item) => item.id === id);


    const handleFocus = (id) => {
        const newPlaceholder = 'yo'
        if (newPlaceholder) {
            return;
        }
    };

    return (
        <div>
            {
                currentInput &&(
                    <div className='flex flex-col gap-4'>
                        <label className='form-style2 w-full'>
                            {currentInput?.title} 
                        </label>

                        <input
                            type={currentInput?.type}
                            placeholder={currentInput?.placeholder}
                            className='form-style2 w-full'
                            // onFocus={() => handleFocus(currentInput?.id)}
                            readOnly
                        />
                    </div>
                )
            }
        </div>
    )
}

export default InputCustomizer;