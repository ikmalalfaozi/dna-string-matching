const { validationResult } = require("express-validator");
const Disease = require("../models/disease");
const DNATest = require("../models/test");
const bmMatch = require("../utils/boyerMoore");
const lcs = require("../utils/lcs");
const isDNAValid = require("../utils/validation");

exports.addNewDNATest = (req, res, next) => {
    const err = validationResult(req);

    if (!err.isEmpty()) {
        const error = new Error("Invalid Value");
        error.errorStatus = 400;
        error.data = err.array();
        throw error;
    }

    if (!isDNAValid(req.body["dna-sequence"])) {
        const error = new Error("Invalid DNA");
        error.errorStatus = 400;
        throw error;
    }

    const username = req.body.username;
    const diseaseName = req.body["disease-name"];
    const dnaSequence = req.body["dna-sequence"];
    let disease;
    let pos;
    let status;

    Disease.findOne({ "name": new RegExp(diseaseName, "i") })
        .then((result) => {
            if (!result) {
                const error = new Error("Disease not found");
                error.errorStatus = 404;
                throw error;
            }

            disease = result;
            let tes = bmMatch(disease["dna-sequence"], dnaSequence);

            if (tes) {
                pos = 100;
                status = true;
            } else {
                pos = (lcs(dnaSequence, disease["dna-sequence"]) / disease["dna-sequence"].length) * 100;
                status = pos >= 80 ? true : false;
            }

            const dnaTest = new DNATest({
                username: username,
                "disease-name": diseaseName,
                "dna-sequence": dnaSequence,
                "percentage-of-similarity": pos,
                status: status,
            });

            dnaTest
                .save()
                .then((data) => {
                    const result = {
                        message: "DNA Test Success",
                        data: data,
                    };
                    res.status(201).json(result);
                })
                .catch((e) => {
                    next(e);
                });
        })
        .catch((err) => {
            next(err);
        });
};
