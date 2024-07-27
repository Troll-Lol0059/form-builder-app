const Form = require('../model/Form');
const FormComponents = require('../model/FormComponents');


// Fetch all forms with their components
exports.getAllForms = async (req, res) => {
    try {
        const forms = await Form.find().populate('formComponents');
        res.status(200).json(forms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new form
exports.createForm = async (req, res) => {
    try {
        const { formName, formComponents, status } = req.body;

        // Create form components
        const formComponentDocs = await FormComponents.insertMany(formComponents);

        // Get the component IDs
        const formComponentIds = formComponentDocs.map(component => component._id);

        // Create the form with the component IDs
        const newForm = new Form({
            formName,
            formComponents: formComponentIds,
            status
        });

        await newForm.save();

        res.status(201).json(newForm);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Edit a form and its form components
exports.editForm = async (req, res) => {
    try {
        const { formId } = req.params;
        const { formName, formComponents, status } = req.body;

        // Update the form components
        for (const component of formComponents) {
            await FormComponents.findByIdAndUpdate(component._id, component, { new: true });
        }

        // Update the form
        const updatedForm = await Form.findByIdAndUpdate(
            formId,
            { formName, formComponents: formComponents.map(component => component._id), status },
            { new: true }
        );

        res.status(200).json(updatedForm);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a form and its form components
exports.deleteForm = async (req, res) => {
    try {
        const { formId } = req.params;

        // Find the form to get its components
        const form = await Form.findById(formId);
        if (!form) {
            return res.status(404).json({ error: 'Form not found' });
        }

        // Delete form components
        await FormComponents.deleteMany({ _id: { $in: form.formComponents } });

        // Delete the form
        await Form.findByIdAndDelete(formId);

        res.status(200).json({ message: 'Form and its components deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
