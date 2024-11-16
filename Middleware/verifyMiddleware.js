const jwt = require("jsonwebtoken");

const verify = (req, res, next) =>{
    // const tokenCheck = req.cookies.uid;      // when cookies is using then this can be applied
    const tokenCheck = req.header('authorization');          // checking whether token is present in header of request api call   (use authorization key)
    // console.log(tokenCheck);     // i.e it returns Bearer <token> format(string) output if we will send the token in Authorisation(auth type/bearer token) section of postman

    // now extracting only token avoiding bearer keyword at the beginning
    const extractedToken = tokenCheck.split(" ")[1];      // string convert into array and token is in first index

    if(extractedToken){       // if token exist
        jwt.verify(extractedToken, process.env.SECRET_KEY, (err,decode) =>{
            if(err){
                res.json({message: "Invalid Token", err: err}).status(401);
            }
            else{
                // console.log(decode);   // { email: 'anmoltripathi@gmail.com', iat: 1731784784 }
                req.email = decode.email;
                next();      // getting to next middleware if exist otherwise to main controller      
            }

        })
    }

}

module.exports = verify;