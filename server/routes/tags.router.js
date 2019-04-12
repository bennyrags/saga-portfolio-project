const express = require('express');
const router =  express.Router();
const pool = require('../modules/pool');  

 router.get('/', (req,res) => {

    const queryText = `SELECT * FROM "tags"`;
    pool.query(queryText)
    .then(response => {
        res.send(response.rows);
    })
    .catch(error => {
        res.sendStatus(500);
        console.log(`Error when getting info from db in router`);
    })

 })


module.exports = router;