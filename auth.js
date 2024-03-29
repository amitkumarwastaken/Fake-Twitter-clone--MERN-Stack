const config = require('config');
const jwt = require('jsonwebtoken');

function auth (req, res, next) {
    const token = req.header('x-auth-token');

    // Check for Token
    if(!token) return res.status(401).json({ msg: "No Token, Authorization Denied"});

    try {
    // Verify Token
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // Add User from payload
    req.user = decoded;
    next();
    } catch(e) {
        res.status(400).json({ msg: "Token is not Valid"});
    }

}

module.exports = auth;