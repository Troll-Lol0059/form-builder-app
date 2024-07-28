import React, { useEffect, useState } from 'react';
import { getForms } from '../services/operations/courseDetailsAPI';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deleteForm } from '../services/operations/courseDetailsAPI';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function ViewAllForms() {
  const [forms, setForms] = useState([]);

  const navigate = useNavigate();

  // handler for Deleting a Form
  const deleteFormHandler = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this form?");
    if (!confirmDelete) return;
    
    try {
      const response = await deleteForm(id);
    } catch (error) {
      console.log("DELETE_FORM_HANDLER ERROR............", error);
    }
  };

  // handler for Editing a Form
  const editFormHandler = async(id) => {
    if(!id) return;

    navigate(`/form/${id}/edit`)
  };


  useEffect(() => {
    const fetchForms = async () => {
      const formsData = await getForms();

      if(!formsData){
        return;
      }
      setForms(formsData);
    };
    fetchForms();
  }, []);

  return (
    <div className='w-[90%] mx-auto my-8 space-y-8'>
      <div className='text-richblack-5 text-[20px] font-semibold'>
        Here are the list of Forms Available:
      </div>

      <div className='border border-[#3b82f6]'>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='bg-[#3b82f6] text-white'>
              <th className='p-2 border'>Form Name</th>
              <th className='p-2 border'>Status</th>
              <th className='p-2 border'>Created At</th>
              <th className='p-2 border'>Edit</th>
              <th className='p-2 border'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {forms?.length > 0 ? (
              forms?.map((form) => (
                <tr key={form._id}>
                  <td className='p-2 border text-richblack-50'>{form.formName}</td>
                  <td className='p-2 border text-richblack-50'>{form.status}</td>
                  <td className='p-2 border text-richblack-50'>{new Date(form.createdAt).toLocaleString()}</td>
                  <td className='p-2 border text-yellow-50 text-[1rem] cursor-pointer text-center'
                    onClick={() => editFormHandler(form._id)}>
                    <FaRegEdit />
                  </td>
                  <td className='p-2 border border-richblack-50 text-[red] text-[1rem] cursor-pointer text-center'
                    onClick={() => deleteFormHandler(form._id)}>
                    <MdDelete />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className='p-2 text-center border text-richblack-25'>
                  No forms available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAllForms;