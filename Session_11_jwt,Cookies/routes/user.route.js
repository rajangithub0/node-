const express = require('express')
const UserModel = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/register', async (req, res) => {
    try {
        const { name, email, username, password } = req.body;
        if (!name || !email || !username || !password) {
            return res.status(400).send({ massage: 'all fields are mandatory' })
        }
        let user = await UserModel.findOne({ email })
        if (user) {
            return res.status(404).send({ massage: "email id is already register" })
        }
        user = await UserModel.findOne({ username })
        if (user) {
            return res.status(404).send({ massage: "username id is already register" })
        }
        const hashpwd = await bcrypt.hash(password, 10);
        const newUser = new UserModel({ name, email, username, password: hashpwd });
        const resp = await newUser.save()
        res.status(201).send({ massage: 'user crate successfully' })
    } catch (error) {
        console.log(error);
        res.status(500).send({ massage: 'internal error occured' })
    }
})


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({ masaage: "all filed are mandatory" })
        }
        let user = await UserModel.findOne({ email })
        if (!user) {
            return res.status(400).send({ massage: "this email is not register" })
        }
        //match the password
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            const payload = { id: user._id, name: user.name, email: user.email };
            const token = await jwt.sign(payload, process.env.JWT_SECRET);
            //lets store token in cookies
            res.cookie('token', token)
            return res.status(200).send({ massage: "logged successfully", token })
        } else {
            return res.status(500).send({ massage: "invalid password" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ massage: 'internal error occured' })

    }
})

router.get('/profile', auth, (req, res) => {
    const details = req.user;
    res.send({ msg: 'welcome to your profile page', details })
})

module.exports = router