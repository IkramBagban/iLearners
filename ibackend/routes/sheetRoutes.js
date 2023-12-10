const express = require("express");

const sheetController=require("../controllers/sheetController")
const router = express.Router();

router.get('/', sheetController.getSheets);
router.get('/lovebabbar', sheetController.loveSheet);
router.get('/fraz', sheetController.frazSheet);


module.exports = router;
