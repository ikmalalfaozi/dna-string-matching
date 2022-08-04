const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DNATest = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        "disease-name": {
            type: String,
            required: true,
        },
        "percentage-of-similarity": {
            type: Number,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("DNATest", DNATest);
