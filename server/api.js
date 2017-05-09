/**
 * Created by Gaëtan on 25/01/2017.
 */
const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

module.exports = router;