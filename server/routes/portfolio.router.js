const express = require('express');
const router =  express.Router();
const pool = require('../modules/pool');  

 router.get('/', (req,res) => {

    const queryText = `SELECT "projects"."name", "projects"."description", "projects"."thumbnail", "projects"."website", "projects"."github", "projects"."date_completed", "tags"."name" AS "tag_name" FROM "projects" JOIN "tags" ON "tags"."id" = "projects"."tag_id"; `;
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