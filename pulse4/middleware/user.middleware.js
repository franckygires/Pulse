const jwt = require('jsonwebtoken');
module.exports = (req,res,next) => {
    try 
    {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RAMDOM_TOKEN_SECRET');

        const userId = decodedToken.userId;
        req.auth = {userId};
        // return res.send(req.body);
        if (req.body.userId && req.body.userId !== req.auth.userId) {
          throw 'Invalid user ID';
        } else {
          next();
        }
    }
    catch
    {
        res.status(401).json({
            error: new Error('Invalid request!')
          });
        }
    };

    
