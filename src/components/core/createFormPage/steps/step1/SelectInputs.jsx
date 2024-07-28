import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";

// required slice functions
import { setStep, setFormHeading } from '../../../../../slices/steps';
import { deleteInput } from '../../../../../slices/inputSlice';

// required Components
import Modal from '../../../../common/Modal';
import ModalData from './ModalData';
import IconBtn from '../../../../common/IconBtn';
import InputCustomizer from './InputCustomizer';
import FormActions from '../../../../common/FormActions';

// required data
import instructions from '../../../../../data/instructions';

function SelectInputs() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {editForm} = useSelector( (state) => state.formSlice );
  // Tracks formData
  var formData = useSelector(state => state.inputs);
  // Tracks form Title
  const title = useSelector((state) => state.formSlice).formTitle;

  // Sets current input to customize
  const [currentInput, setCurrentInput] = useState(null);
  // Tracks Add Inputs Modal State
  const [showModal, setShowModal] = useState(null);
  // set's form title and Edit FOrm Title
  const [formTitle, setFormTitle] = useState(title || '');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [data,setData] = useState(null);

  // handler functions starts here
  // when clicked sets title to edit mode
  const handleTitleClick = () => {
    setIsEditingTitle(true);
  };

  // sets title
  const handleTitleChange = (e) => {
    setFormTitle(e.target.value);
  };

  // saves form title for future use
  const handleTitleBlur = () => {
    setIsEditingTitle(false);
    dispatch(setFormHeading(formTitle));
  };

  // sets current input
  const inputsHandler = (id) => {
    setCurrentInput(id);
  }

  // handles next button
  const nextStepHandler = () => {
    // if there is no Input Added dont show next button
    if (formData.length === 0) {
      toast.error('Set Atleat One Input to Proceed')
    }
    if (!currentInput) {
      return;
    }
    dispatch(setStep(2));
  }

  const deleteHandler = (id) => {
    dispatch(deleteInput(id));
    toast.success('Input Deleted');
  }

  if(editForm){
    formData = null;
  }

  useEffect(() => {
    if(editForm){
      setData(formData);
      return;
    }

    setShowModal({
      renderComponent: <ModalData setShowModal={setShowModal} setCurrentInput={setCurrentInput} />,
      btnText: 'X',
      btnHandler: () => setShowModal(null),
    });
  }, []);


  return (
    <div className='w-full flex m-8 gap-8'>
      <div className='w-full max-w-[20%] border border-[#3b82f6] py-4 px-1 rounded-md space-y-16'>
        <div className=''>
          <h4 className='text-richblack-5 font-bold text-center text-[20px] underline my-4'>Added Inputs</h4>

          {editForm ? (data?.length === 0) : (formData?.length === 0) &&<div className='text-[1rem] text-richblack-50'>Add Input to Show</div>}

          {formData?.map((item, index) => (
            <div key={item.id} onClick={() => inputsHandler(item.id)}
              className={`${currentInput === item.id ? 'bg-[#3b82f6] text-[1rem] font-[500] text-richblack-5' : 'text-richblack-200 bg-richblack-600'} border border-y py-1 px-2 font-normal flex items-center cursor-pointer`}
            >
              <span className='px-2'>{index + 1}</span>
              <span className='px-2'>{item?.title}</span>
              <span className='bg-[#f75555] aspect-square rounded-full px-1 py-1 flex justify-center items-center' onClick={ () => deleteHandler(item.id) }>
                <MdDelete />
              </span>
            </div>
          ))}

        </div>

        <IconBtn
          text={'Add Inputs'}
          customClasses={'yellowButton mx-2'}
          onclick={() => setShowModal({
            renderComponent: <ModalData setShowModal={setShowModal} setCurrentInput={setCurrentInput} />,
            btnText: 'X',
            btnHandler: () => setShowModal(null),
          })} />
      </div>

      <div className='w-full max-w-[50%] border border-[#3b82f6] py-4 px-1 rounded-md space-y-8'>
        <div className='min-h-fit'>
          {formData?.length === 0 ? (
            <div className='text-richblack-5 text-center text-[1rem]'>
              Add Something to Show
            </div>
          ) : (
            currentInput &&
            <div className='space-y-12 px-8'>
              <div className='flex justify-center my-4'>
                {isEditingTitle ? (
                  <input
                    type="text"
                    value={formTitle}
                    onChange={handleTitleChange}
                    onBlur={handleTitleBlur}
                    autoFocus
                    className="form-style"
                  />
                ) : (
                  <h1 onClick={handleTitleClick} className="w-fit section_heading border border-richblack-400 rounded-md px-6 py-2">
                    {formTitle}
                  </h1>
                )}
              </div>

              <InputCustomizer id={currentInput} />
            </div>
          )}
        </div>

        <div>
          {
            formData?.length > 0 && (
              <FormActions btn1Text={'Back'}
                btn2Text={'Next'}
                btn1Handler={() => navigate(-1)}
                btn2Hanlder={() => nextStepHandler()}
              />
            )
          }
        </div>

        <div className='px-4'>
          <div className='text-richblack-50 text-[1rem]'>
            Instructions:
          </div>

          <ul className='text-richblack-100'>
            {
              instructions?.map( (item,index) =>(
                <li key={item.id}>
                  <span>{`${index+1}. `}</span>
                  <span>{item.value}</span>
                </li>
              ) )
            }
          </ul>

        </div>
      </div>

      {showModal && <Modal modalData={showModal} />}
    </div>
  );
}

export default SelectInputs;
