const filter = require("../utils/filter");
const DNATest = require("../models/test");
const moment = require("moment");

exports.searchHistory = (req, res, next) => {
    const searchKey = filter(req.body["search-key"]);
    if (searchKey.diseaseName && searchKey.date.year) {
        DNATest.find({
            "disease-name": new RegExp(searchKey.diseaseName, "i"),
            createdAt: {
                $gt: moment(searchKey.date.year + "-" + searchKey.date.month + "-" + searchKey.date.date, "YYYY-MM-DD")
                    .startOf("day")
                    .toDate(),
                $lt: moment(searchKey.date.year + "-" + searchKey.date.month + "-" + searchKey.date.date, "YYYY-MM-DD")
                    .endOf("day")
                    .toDate(),
            },
        })
            .then((result) => {
                res.status(200).json({
                    message: "Get History Success",
                    data: result,
                });
            })
            .catch((e) => {
                next(e);
            });
    } else if (searchKey.diseaseName) {
        DNATest.find({ "disease-name": new RegExp(searchKey.diseaseName, "i") })
            .then((result) => {
                res.status(200).json({
                    message: "Get History Success",
                    data: result,
                });
            })
            .catch((e) => {
                next(e);
            });
    } else if (searchKey.date.year) {
        DNATest.find({
            createdAt: {
                $gt: moment(searchKey.date.year + "-" + searchKey.date.month + "-" + searchKey.date.date, "YYYY-MM-DD")
                    .startOf("day")
                    .toDate(),
                $lt: moment(searchKey.date.year + "-" + searchKey.date.month + "-" + searchKey.date.date, "YYYY-MM-DD")
                    .endOf("day")
                    .toDate(),
            },
        })
            .then((result) => {
                res.status(200).json({
                    message: "Get History Success",
                    data: result,
                });
            })
            .catch((e) => {
                next(e);
            });
    } else {
        res.status(400).json({
            message: "Get History Failed",
            data: [],
        });
    }
};

exports.getAllHistory = (req, res, next) => {
    DNATest.find()
        .then((result) => {
            res.status(200).json({
                message: "Get All History Success",
                data: result,
            });
        })
        .catch((e) => {
            next(e);
        });
}