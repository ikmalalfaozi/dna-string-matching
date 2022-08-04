const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const testController = require("../controllers/test");

router.post(
    "/",
    [
        body("username").isLength({ min: 1 }).withMessage("input name minimal berjumlah satu karakter"),
        body("disease-name").isLength({ min: 1 }).withMessage("Input nama penyakit minimal berjumlah 1 karakter"),
        body("dna-sequence").isLength({ min: 3 }).withMessage("input sequence dna minimal berjumlah 3 karakter"),
    ],
    testController.addNewDNATest
);

module.exports = router;
