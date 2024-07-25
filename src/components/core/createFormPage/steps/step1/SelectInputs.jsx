import React, { useState, useRef, useEffect } from 'react';
import Modal from '../../../../common/Modal';
import ModalData from './ModalData';
import { useSelector } from 'react-redux';
import IconBtn from '../../../../common/IconBtn';
import InputCustomizer from './InputCustomizer';

function SelectInputs() {
  // tracks Add Inputs Modal State
  const [showModal, setShowModal] = useState(null);
  // tracks formData
  const formData = useSelector(state => state.inputs);
  // set's current input to customize
  const [currentInput,setCurrentInput] = useState(null);

  const inputsHandler = (id) => {
    setCurrentInput(id);
  }

  useEffect(() => {
    setShowModal(
      {
        renderComponent: <ModalData setShowModal={setShowModal} setCurrentInput={setCurrentInput} />,
        btnText: 'X',
        btnHandler: () => setShowModal(null),
      }
    );
  }, [])

  return (
    <div className='w-full flex'>
      <div>
        <div>
          {
            formData?.map((item, index) => (
              <div key={item.id} onClick={ () => {inputsHandler(item.id)} }>
                <span>{index + 1}</span>
                <span>{item?.title}</span>
              </div>
            ))
          }
        </div>

        <IconBtn text={'Add More Inputs'}
          customClasses={`text-white text-center text-[16px] px-6 py-2 rounded-md bg-[#14279B] transition-all duration-200`}
          onclick={() => setShowModal(
            {
              renderComponent: <ModalData setShowModal={setShowModal} setCurrentInput={setCurrentInput}  />,
              btnText: 'X',
              btnHandler: () => setShowModal(null),
            }
          )}
        />
      </div>

      <div>
        {formData?.length === 0 ? (
          <div>Add Something to Show</div>
        ) : (currentInput &&
          <div>
            <InputCustomizer id={currentInput} />
          </div>
        )}
      </div>

      {
        (showModal && <Modal modalData={showModal} />)
      }
    </div>
  );
}

export default SelectInputs;
