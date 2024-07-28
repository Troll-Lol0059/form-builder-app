// routes/forms.js
const express = require('express');
const router = express.Router();
const formController = require('../controllers/FormControllers');

// Fetch all forms
router.get('/', formController.getAllForms);

// fetch single form
router.get('/get/:formId',formController.getFormById);

// Create a new form
router.post('/create', formController.createForm);

// Edit an existing form
router.put('/edit/:formId', formController.editForm);

// Delete a form
router.delete('/delete/:formId', formController.deleteForm);

module.exports = router;



