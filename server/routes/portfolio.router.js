const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    //Select all of these things individually to make the join work
    const queryText = `SELECT "projects"."id", "projects"."name", "projects"."description", "projects"."thumbnail", "projects"."website", "projects"."github", "projects"."date_completed", "tags"."name" AS "tag_name" FROM "projects" JOIN "tags" ON "tags"."id" = "projects"."tag_id"; `;
    pool.query(queryText)
        .then(response => {
            res.send(response.rows);
        })
        .catch(error => {
            res.sendStatus(500);
            console.log(`Error when getting info from db in router`);
        })

})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const queryText = `DELETE FROM "projects" WHERE "id" = $1`;
    pool.query(queryText, [id])
        .then(() => {
            res.sendStatus(201);
        })
        .catch(error => {
            res.sendStatus(500);
            console.log(`There was an error deleting the thang, here it is:`, error);

        })
})
router.post('/', (req, res) => {
    const newProject = req.body;
    const queryText = `INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
    VALUES ($1,$2,$3,$4,$5,$6,$7);`;
    pool.query(queryText, [newProject.name, newProject.description, newProject.thumbnail, newProject.website, newProject.github, newProject.date_completed, newProject.tag_id])
        .then(() => {
            res.sendStatus(201);
        })
        .catch(error => {
            res.sendStatus(500);
            console.log(`There was an error deleting the thang, here it is:`, error);

        })
})


module.exports = router;