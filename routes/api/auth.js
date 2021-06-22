const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const {check, validationResult} = require('express-validator/');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');


// @route   GET api/auth
// @desc    Authentic, call middleware
// @acc     Public

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/users
// @desc    Register user
// @access  public
router.post('/', 
[
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
], 
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password } = req.body;
    try {
        // See if user exists
        let user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({errors:[{ msg: 'Invalid Credentials'}]});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(400).json({errors:[{ msg: 'Invalid Credentials'}]});
        }

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

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }

});

module.exports = router;