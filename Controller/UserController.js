const userModel = require("../Models/userModel");
// importing and jwtwebtoken(after installing it by "npm i jwtwebtoken" command)
const jwt = require("jsonwebtoken");

const handleUserSignup = (req,res) =>{
    try{
    // it will create a document in userModel collection
    userModel.create(req.body).then(() =>{
        res.json({"Message":"Created Successfully"}).status(201);
    }).catch((err) =>{
        res.json({"Meassge":"This is wrong","err":err}).status(500);
    });
}
catch(err){
    res.json({"Message":"This is wrong","err":err}).status(500);
}
}

const handleUserLogin = (req,res) =>{
    let {email} = req.body;    // descructuring of object
    try{
        userModel.find({email:email}).then((response) =>{     // response we are getting here is in form of array
            if(response.length > 0){
                jwt.sign(req.body, process.env.SECRET_KEY,(err,token) =>{
                    if(err){
                        res.json({"Message":"This is wrong","err":err}).status(500);
                    }
                    else{
                        res.json({
                            "Message":"Login Successfull",
                            "data":req.body,         // to see which user's login has been done
                            "token":token
                        }).status(200);
                    }
                });                                                                       // {expiresIn:'1d'} - In third argument but currently I am doing this this will generate the token and expires after 1 day        
            }
        });
    }catch(err){
        res.json({"Message":"This is wrong","err":err}).status(500);
    }
}

module.exports = {handleUserSignup, handleUserLogin};

