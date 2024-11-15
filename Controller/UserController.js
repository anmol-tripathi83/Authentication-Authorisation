const userModel = require("../Models/userModel");

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

module.exports = {handleUserSignup};