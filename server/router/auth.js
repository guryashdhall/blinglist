const express = require("express");
const { User } = require("../models/User");

const router = express.Router();
const bcrypt = require("bcrypt");

//SIGNUP API
router.post('/signup', (req, res) => {
    const { firstName, lastName, email, password, confirmPassword, securityQuestion, securityAnswer } = req.body;


    if (!firstName | !lastName | !email | !password | !confirmPassword | !securityQuestion | !securityAnswer) {
        return res.status(422).json({
            success: false,
            message: 'Please fill out all fields'
        });
    }
    else if (password !== confirmPassword) {
        return res.status(422).json({
            success: false,
            message: 'Passwords do not match'
        });
    }
    else {
        User.findOne({ email: email })
            .then((savedUser) => {
                if (savedUser) {
                    console.log(savedUser);
                    return res.status(422).json({
                        success: false,
                        message: 'User already exists with the same email id'
                    });
                }
                else {
                    bcrypt.hash(password, 12)
                        .then((hashedPassword) => {
                            const user = new User({
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                                password: hashedPassword,
                                confirmPassword: hashedPassword,
                                securityQuestion: securityQuestion,
                                securityAnswer: securityAnswer
                            });
                            user.save()
                                .then((user) => {
                                    console.log(user);
                                    return res.status(200).json({
                                        success: true,
                                        message: 'User created successfully',
                                        user: user
                                    }
                                    )
                                })
                                .catch((err) => {
                                    return res.status(500).json({
                                        success: false,
                                        message: 'Error creating user',
                                        error: err
                                    })
                                });
                        })



                }
            })
            .catch((err) => {
                return res.status(500).json({
                    success: false,
                    message: 'Error creating user',
                    error: err
                })
            })
    }

});

// LOGIN API

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email | !password) {
        return res.status(422).json({
            success: false,
            message: 'Please enter both fields: email and password'
        });
    }
    else {
        User.findOne({ email: email })
            .then(savedUser => {
                if (!savedUser) {
                    return res.status(422).json({
                        success: false,
                        message: 'User does not exist'
                    });
                }
                else {
                    bcrypt.compare(password, savedUser.password)
                        .then(isMatch => {
                            if (!isMatch) {
                                return res.status(422).json({
                                    success: false,
                                    message: 'Incorrect password'
                                });
                            }
                            else {
                                return res.status(200).json({
                                    success: true,
                                    message: 'User logged in successfully',
                                    user: savedUser
                                })
                            }
                        }).catch(err => {
                            return res.status(500).json({
                                success: false,
                                message: 'Error logging in',
                                error: err
                            })
                        })
            }})
            .catch (err => {
                    return res.status(500).json({
                        success: false,
                        message: 'Error logging in',
                        error: err
                    })
                })
            }
            });












        router.post('/forgot-password', (req, res) => {
            const { email, securityQuestion, securityAnswer } = req.body;
            if (!email | !securityQuestion | !securityAnswer) {
                res.status(422).send('Please fill out all fields');
            }
            else {
                res.status(200).send('Password reset email sent');
            }
        }
        );
        router.post('/reset-password', (req, res) => {
            const { password, confirmPassword } = req.body;
            if (!password | !confirmPassword) {
                res.status(422).send('Please fill out all fields');
            }
            else {
                res.status(200).send('Password reset');
            }
        });


        module.exports = router;