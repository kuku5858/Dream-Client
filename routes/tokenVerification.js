const jwt = require("jsonwebtoken");

const tokenVerification = (req, res, next) => {
    const authHeader = req.headers.token;
    if(authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) res.status(403).json("Token is not valid!");
            req.user = user;
            next();   
        })
    } else {
        return res.status(401).json("Not admin");
    }
}

const tokenVerificationAndAuth = (req, res, next) => {
    tokenVerification(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            return res.status(401).json("Not allowed");
        }
    })
}

const tokenVerificationAndAdmin = (req, res, next) => {
    tokenVerification(req, res, () => {
        if(req.user.isAdmin) {
            next()
        } else {
            return res.status(401).json("Not allowed");
        }
    })
}

module.exports = {tokenVerification, tokenVerificationAndAuth, tokenVerificationAndAdmin};