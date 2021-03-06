const router = require('express').Router();

router.get('/travelers', (err, res) => {});

router.post('/travelers', (err, res) => {});

router.get('/travelers/:id', (err, res) => {});

router.delete('/travelers', (err, res) => {});

router.get('/locations', (err, res) => {});

router.post('/locations', (err, res) => {});

router.get('/locations/:id', (err, res) => {});

router.delete('/locations/:id', (err, res) => {});

router.post('/trips', (err, res) => {});

router.delete('/trips/:id', (err, res) => {});

module.exports = router;
