import React, { useState, useEffect } from 'react';
import Modal from '../../../../common/Modal';
import ModalData from './ModalData';
import { useSelector } from 'react-redux';
import IconBtn from '../../../../common/IconBtn';
import InputCustomizer from './InputCustomizer';

function SelectInputs() {
  // Tracks Add Inputs Modal State
  const [showModal, setShowModal] = useState(null);
  // Tracks formData
  const formData = useSelector(state => state.inputs);
  // Sets current input to customize
  const [currentInput, setCurrentInput] = useState(null);

  const inputsHandler = (id) => {
    setCurrentInput(id);
  }

  useEffect(() => {
    setShowModal({
      renderComponent: <ModalData setShowModal={setShowModal} setCurrentInput={setCurrentInput} />,
      btnText: 'X',
      btnHandler: () => setShowModal(null),
    });
  }, []);

  
  return (
    <div className='w-full flex'>
      <div className='px-4 rounded-md'>
        <div className='flex flex-col gap-2'>
          {formData?.map((item, index) => (
            <div key={item.id} onClick={() => inputsHandler(item.id)}
              className={`${currentInput === item.id ? 'bg-yellow-50 py-1 px-2 border-y text-[1rem] font-[500] text-[red]' : 'px-2'} space-x-4`}
            >
              <span>{index + 1}</span>
              <span>{item?.title}</span>
            </div>
          ))}
        </div>

        <IconBtn
          text={'Add More Inputs'}
          customClasses={'text - white text-center text-[16px] px-6 py-2 rounded-md bg-[#14279B] transition-all duration-200'}
          onclick={() => setShowModal({
            renderComponent: <ModalData setShowModal={setShowModal} setCurrentInput={setCurrentInput} />,
            btnText: 'X',
            btnHandler: () => setShowModal(null),
          })} />
      </div>

      <div>
        {formData?.length === 0 ? (
          <div>Add Something to Show</div>
        ) : (
          currentInput && <InputCustomizer id={currentInput} />
        )}
      </div>

      {showModal && <Modal modalData={showModal} />}
    </div>
  );
}

export default SelectInputs;
