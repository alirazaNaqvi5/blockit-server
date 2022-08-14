const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


// Load Book model
const Employee = require('../../models/Employee');

// create route for login
router.post('/login', (req, res) => {
    console.log(req.body);
    // make check for email and password
    // if email and password is correct then send token
    // if email and password is incorrect then send error
    if (!req.body.email || !req.body.password ) {
        res.status(400).send({ error: 'Email and password is required' });
    } else {
        // check if email and password is correct
        // if email and password is correct then send token
        // if email and password is incorrect then send error
        Employee.findOne({ email: req.body.email }, (err, employee) => {
            if (err) {
                res.status(500).send({ error: 'Internal server error' });
            } else if (!employee) {
                res.status(401).send({ error: 'Incorrect email or password' });
            } else {
                // match password
                var em = new Employee();
                var isMatch = em.validPassword(req.body.password);
                console.log(isMatch);
                if (isMatch) {
                    // create token
                    const token = jwt.sign({ _id: employee._id }, 'secret');
                    res.status(200).send({ token });
                } else {
                    res.status(401).send({ error: 'Incorrect email or password' });
                }
            }
        });

    }
    }
);

module.exports = router;