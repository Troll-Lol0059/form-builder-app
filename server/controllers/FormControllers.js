const Form = require('../model/Form');
const FormComponents = require('../model/FormComponents');


// Fetch all forms with their components
exports.getAllForms = async (req, res) => {
    try {
        const forms = await Form.find().populate('formComponents');
        return res.status(200).json({
            success:true,
            data:forms,
            message:"Fetched Successfully",
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new form
exports.createForm = async (req, res) => {
    try {
        const { title, formData, status } = req.body;

        // Create form components
        const formComponentDocs = await FormComponents.insertMany(formData);

        // Get the component IDs
        const formComponentIds = formComponentDocs.map(component => component._id);

        // Create the form with the component IDs
        const newForm = new Form({
            formName:title,
            formComponents: formComponentIds,
            status
        });

        await newForm.save();

        return res.status(201).json(
            {
                success:true,
                data:newForm,
            }
        );
    } catch (error) {
        return res.status(400).json({ error: error.message });
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

        return res.status(200).json({
            success:true,
            data:updatedForm,
        });
    } catch (error) {
        return res.status(400).json({ error: error.message });
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

        return res.status(200).json({ 
            success:true,
            message: 'Form and its components deleted successfully',
        });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
