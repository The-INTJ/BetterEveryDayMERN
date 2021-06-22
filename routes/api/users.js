const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/');
const User = require('../../models/User'); // Importing model
const bcrypt = require('bcryptjs'); // encryption for password
const jwt = require('jsonwebtoken');
const config = require('config');

// @route   POST api/users
// @desc    Register user
// @access  public
router.post('/', 
[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter as least six characters').isLength({min: 6})
], 
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {name, email, password } = req.body;
    try {
        // See if user exists
        let user = await User.findOne({email});
        if(user) {
            return res.status(400).json({errors:[{ msg: 'User already exists'}]});

        }
        user = new User({
            name,
            email,
            password
        })
        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        // Return json webtoken
        const payload = {
            user: {
                id: user.id // mongoose abstraction, underscore not needed
            }
        }
        jwt.sign(
            payload, 
            config.get('jwtSecret'),
            {expiresIn: 36000}, // extra time for testing
            (err, token) => {
                if(err) throw err;
                console.log(token)
                res.json({token}).send();
            }
            );

        res.send('User registered');
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }

});

router.get('/', (req, res) => res.send('User get'));

module.exports = router;