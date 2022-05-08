const express = require('express');
const router = express.Router();
const collegeController = require("../controller/collegeController")
const internController = require("../controller/internController")
    // const collegeController = require("../controller/collegeDetails")


router.post('/functionup/colleges', collegeController.createCollege)

router.post('/functionup/interns', internController.createIntern)

router.get('/functionup/collegeDetails', collegeController.getCollegeAndInterns)




module.exports = router;