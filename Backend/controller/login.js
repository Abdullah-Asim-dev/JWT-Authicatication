const bcrypt = require('bcrypt');
// Purane path ko mita kar yeh likhein:
const { generateToken } = require('../utils/jwtutils');

const User = require('../models/user');
async function login (req,res){
try{
const {email,password}=req.body;
// ager user exist krta h to uska password aur email check krna hoga aur console ma user not  found print kare ga
const existingUser=await User.findOne({email})
if(!existingUser){
    console.log('user not found');
    return res.status(404).json({message: 'User not found'})
}
// ager  password aur existinguser ka password match kare ga aur agee match ho ga ager dono same toh ga toh sucessfule login hoga aur ager match na hua toh incorrect pw ka message print kare ga 
const isPasswordCorrect=await bcrypt.compare(password,existingUser.password)
if (!isPasswordCorrect){
    throw new Error('incorrect password')
}
const token=generateToken(existingUser._id)
console.log('Login successful', token);
res.status(200).json({user:existingUser,token})

}catch(error){
    console.log(error.message)
    res.status(401).json({message:'invalid crediential'})
}
}
module.exports={login}