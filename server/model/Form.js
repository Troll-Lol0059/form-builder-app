const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    formName: {
        type: String,
        required: true,
    },
    formComponents: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "FormComponents",
    }],
    status: {
        type: String,
        enum: ["Draft", "Published"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Form", formSchema);