const key = require('jsonwebtoken');

module.exports = {
    createToken : (data) => {
        const token = key.sign({...data},'rahasia',{
            expiresIn:'1h'
        });
        return token
    },
    verifyToken: (req, res, next) => {
        const bearerToken = req.headers.authorization
        if(!bearerToken){
            res.status(401).json({
                message: "unauthorized"
            })
        }try{
            const token = bearerToken.split(" ")[1]
            const decoded = key.verify(token, "rahasia");
            if(decoded){
                next()
            }
        }
        catch(error){
            console.log(error)
            res.status(401).json({
                message:"invalid signature"
            })
        }
    }
}