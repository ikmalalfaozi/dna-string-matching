const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const diseaseController = require("../controllers/disease");

router.post(
    "/",
    [body("name").isLength({ min: 1 }).withMessage("input name minimal berjumlah satu karakter"), body("dna-sequence").isLength({ min: 3 }).withMessage("input sequence dna minimal berjumlah 3 karakter")],
    diseaseController.addNewDisease
);

router.get("/", diseaseController.getAllDisease);
router.get("/:id", diseaseController.getDiseaseById);
router.put(
    "/:id",
    [body("name").isLength({ min: 1 }).withMessage("input name minimal berjumlah satu karakter"), body("dna-sequence").isLength({ min: 3 }).withMessage("input sequence dna minimal berjumlah 3 karakter")],
    diseaseController.updateDisease
);

router.delete("/:id", diseaseController.deleteDisease);

module.exports = router;
