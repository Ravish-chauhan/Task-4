const jwt = require('jsonwebtoken');

// Middleware function to verify the token
const verifyToken = (req, res, next) => {
    // Get the token from the request headers
    const token = req.header('Authorization');

    // Check if no token is provided
    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No token provided' });
    }

    try {
        // Verify the token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        
        // Attach user info from the token payload to the request object
        req.user = verified;
        
        // Call next middleware or route handler
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid Token' });
    }
};

module.exports = verifyToken;
