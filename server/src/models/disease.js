const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Disease = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        "dna-sequence": {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Disease", Disease);
