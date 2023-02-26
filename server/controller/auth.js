const jwt = require('jsonwebtoken');
const isLogin = (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token)
    res.status(401).json({msg:"please login for access"});
    else{
        try {
            const verify = jwt.verify(token,process.env.SECRET);
            if(verify)
            {
                req.id = verify.id;
                console.log("authenticated")
            }
        } catch (err) {
            res.status(401).json({msg:"please login for access"});
        }
    }
}