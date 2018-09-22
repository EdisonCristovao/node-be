const express = require('express');
const router = express.Router();

router.get('/', (req, resp, next) => {
    resp.status(200).send({
        title: 'API',
        version: '0.0.11'
    });
});

module.exports = router;