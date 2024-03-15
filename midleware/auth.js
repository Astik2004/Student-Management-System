var session = require("express-session");

const auth = (req,res,next)=>{
    try {
        if(!req.session.isLoggedIn){
            let path = req.originalUrl.substring(0,7);
            console.log(path);
            return res.status(401).redirect('http://localhost:5000'+path+'auth');
        }
        next();
    } catch (error) {
        console.log(error);
       return res.status(401).json({message: "Unauthorised User"});
    }
}

module.exports = auth;