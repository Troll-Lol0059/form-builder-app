import { toast } from 'react-hot-toast';
import apiConnector from './apiConnector';
import { formEndpoints } from '../apis';


export const getForms = async () => {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", formEndpoints.getAllForms);
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Forms");
    }
    result = response?.data?.data;
  } catch (error) {
    console.log("GET_ALL_FORMS API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const createForm = async (formData) => {
  const toastId = toast.loading("Creating...");
  let result = null;
  try {
    const response = await apiConnector("POST", formEndpoints.createForm, formData);
    if (!response?.data?.success) {
      throw new Error("Could Not Create Form");
    }
    result = response?.data?.data;
    toast.success("Form Created Successfully");
  } catch (error) {
    console.log("CREATE_FORM API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const editForm = async (formId, updatedFormData) => {
  const toastId = toast.loading("Updating...");
  let result = null;
  try {
    const response = await apiConnector("PUT", formEndpoints.editForm(formId), updatedFormData);
    if (!response?.data?.success) {
      throw new Error("Could Not Update Form");
    }
    result = response?.data?.data;
    toast.success("Form Updated Successfully");
  } catch (error) {
    console.log("EDIT_FORM API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const deleteForm = async (formId) => {
  const toastId = toast.loading("Deleting...");
  let result = null;
  try {
    const response = await apiConnector("DELETE", formEndpoints.deleteForm(formId));
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Form");
    }
    result = response?.data?.data;
    toast.success("Form Deleted Successfully");
  } catch (error) {
    console.log("DELETE_FORM API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

