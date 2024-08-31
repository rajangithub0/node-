const jwt = require('jsonwebtoken')

async function auth(req, res, next) {
    const cookie = req.cookies;
    if (cookie.token) {
        const token = cookie.token;
        // console.log(cookie);
        const user = await jwt.verify(token, process.env.JWT_SECRET)
        req.user = user;
        next()
    } else {
        res.send('not authorized')
    }


}

//for http header
// async function auth(req, res, next) {
//     //token can come from cookies and http header

//     //how to get token from https headers
//     const token = req.headers.authorization;
//     if (!token) {
//         return res.send('not an authorized user')
//     } else {

//         const ogToken = token.split(' ')[1];
//         const user = await jwt.verify(ogToken, process.env.JWT_SECRET)
//         req.user = user;
//     }

//     next()//you are passing to user to access profile page
// }

module.exports = auth;