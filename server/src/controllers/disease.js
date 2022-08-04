const { validationResult } = require("express-validator");
const Disease = require("../models/disease");
const isDNAValid = require("../utils/validation");

exports.addNewDisease = (req, res, next) => {
    const err = validationResult(req);

    if (!err.isEmpty()) {
        const error = new Error("Invalid Value");
        error.errorStatus = 400;
        error.data = err.array();
        throw error;
    }

    Disease.findOne({ name: new RegExp(req.body.name, "i") })
        .then((result) => {
            if (result) {
                const error = new Error("The name of the disease already exists");
                error.errorStatus = 400;
                throw error;
            }

            if (!isDNAValid(req.body["dna-sequence"])) {
                const error = new Error("Invalid DNA");
                error.errorStatus = 400;
                throw error;
            }

            const name = req.body.name;
            const dnaSequence = req.body["dna-sequence"];

            const disease = new Disease({
                name: name,
                "dna-sequence": dnaSequence,
            });

            disease
                .save()
                .then((data) => {
                    const result = {
                        message: "Add new disease Success",
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

exports.getAllDisease = (req, res, next) => {
    const currentPage = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 5;
    let totalItems;

    Disease.find()
        .countDocuments()
        .then((count) => {
            totalItems = count;
            return Disease.find()
                .skip((currentPage - 1) * perPage)
                .limit(perPage);
        })
        .then((result) => {
            res.status(200).json({
                message: "Get All Disease Success",
                data: result,
                total_data: totalItems,
                per_page: perPage,
                current_page: currentPage,
            });
        })
        .catch((e) => {
            next(e);
        });
};

exports.getDiseaseById = (req, res, next) => {
    const id = req.params.id;
    Disease.findById(id)
        .then((result) => {
            if (!result) {
                const error = new Error("Disease not found");
                error.errorStatus = 404;
                throw error;
            }

            res.status(200).json({
                message: "Getting Disease Data Successful",
                data: result,
            });
        })
        .catch((err) => {
            next(err);
        });
};

exports.updateDisease = (req, res, next) => {
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

    const name = req.body.name;
    const dnaSequence = req.body["dna-sequence"];
    const id = req.params.id;

    Disease.findOne({ name: new RegExp(name, "i"), _id: { $ne: id } })
        .then((data) => {
            if (data) {
                const error = new Error("The name of the disease already exists");
                error.errorStatus = 400;
                throw error;
            }

            Disease.findById(id)
                .then((disease) => {
                    if (!disease) {
                        const error = new Error("Disease not found");
                        error.errorStatus = 404;
                        throw error;
                    }

                    disease.name = name;
                    disease["dna-sequence"] = dnaSequence;

                    return disease.save();
                })
                .then((result) => {
                    res.status(200).json({
                        message: "Update Success",
                        data: result,
                    });
                })
                .catch((err) => {
                    next(err);
                });
        })
        .catch((err) => {
            next(err);
        });
};

exports.deleteDisease = (req, res, next) => {
    const id = req.params.id;

    Disease.findById(id)
        .then((disease) => {
            if (!disease) {
                const error = new Error("Disease not found");
                error.errorStatus = 404;
                throw error;
            }
            return Disease.findByIdAndRemove(id);
        })
        .then((result) => {
            res.status(200).json({
                message: "Remove Disease Successful",
                data: result,
            });
        })
        .catch((err) => {
            next(err);
        });
};
