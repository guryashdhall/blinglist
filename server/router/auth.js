const express = require("express");

const router = express.Router();


router.post('/signup',(req,res)=>{
    const{firstName,lastName,email,password,confirmPassword,securityQuestion, securityAnswer }=req.body;
    

    if( !firstName | !lastName | !email | !password | !confirmPassword | !securityQuestion | !securityAnswer){
        res.status(422).send('Please fill out all fields');
    }
        else if(password !== confirmPassword){
            res.status(422).send('Passwords do not match');
        }   
        else{
            res.status(200).send('User created');
        }
    }
);



router.post('/login',(req,res)=>{
    const{email,password}=req.body;
    if(!email | !password){
        res.status(422).send('Please fill out all fields');
    }
    else{
        res.status(200).send('User signed in');
    }
});


module.exports = router;