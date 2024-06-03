const express = require("express");
const router = express.Router();
/*
router.get('/api/contacts', (req,res) => {
    res.status(200).json({
      "message" : `Get all contacts`
    });
});
// <OR>
*/
router.route('/').get((req,res) => {
    res.status(200).json({
      "message" : `Get all contacts`
    });
});

router.route('/').post((req,res) => {
    res.status(200).json({
        "message" : `Register contact`,
    });
});

router.route('/:id').get((req,res) => {
    console.log(req.params);
    res.status(200).json({
      "message" : `Detail contact for ID: ${req.params.id}`
    });
});

router.route('/:id').put((req,res) => {
    console.log(req.params);
    res.status(200).json({
      "message" : `Update contact for ID: ${req.params.id}`
    });
});

router.route('/:id').delete((req,res) => {
    console.log(req.params);
    res.status(200).json({
      "message" : `Delete contact for ID: ${req.params.id}`
    });
});



module.exports = router;