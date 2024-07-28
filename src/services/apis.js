const BASE_URL = process.env.REACT_APP_BASE_URL;

// Form ENDPOINTS
export const formEndpoints = {
  createForm: `${BASE_URL}/api/forms/create`,
  editForm: (formId) => `${BASE_URL}/api/forms/edit/${formId}`,
  deleteForm: (formId) => `${BASE_URL}/api/forms/delete/${formId}`,
  getAllForms: `${BASE_URL}/api/forms/`,
  getSingleForm:(formId) => `${BASE_URL}/api/forms/get/${formId}`,
};




