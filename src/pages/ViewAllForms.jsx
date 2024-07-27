import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { getForms } from '../services/operations/courseDetailsAPI';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function ViewAllForms() {
  const [forms, setForms] = useState([]);

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
                  <td className='p-2 border text-yellow-50 text-[1rem] cursor-pointer text-center'><FaRegEdit /></td>
                  <td className='p-2 border border-richblack-50 text-[red] text-[1rem] cursor-pointer text-center'><MdDelete /></td>
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