const jwt=require('jsonwebtoken');
const Secretkey=require('../configuration/jwtconfig');

// is ka kaam token ko generate karna hai
function generateToken(user){
    const payload={
        ID:user._id,
        email:user.email,
        role:user.role
    }
// payload ko sign karna hai aur 2 ghante ke liye valid token generate karna hai aur jwt.sign() function ka use karna hai aur jwtsign key nikalna hai jo configuration folder me jwtconfig.js file me rakha hai
return jwt.sign(payload,Secretkey,{expiresIn:'2h'});


}
function GenerateRefreshToken(){
const payload={
ID:user._id,
email:user.email,
role:user.role
}
// yeh 7 hours ka liye token ki key valid hogi aur 7hours ka baad token ki key ko refresh kare ga takke aur key ma changes hogi 7 hours ka baad new key dega
return jwt.sign(payload,Secretkey,{expiresIn:'7h'}
)}

function verifyToken(token){
    // token ko verify karne ka liye jwt.verify() function ka use karna hai aur jwtsign key nikalna hai jo configuration folder me jwtconfig.js file me rakha hai
    return jwt.verify(token,Secretkey);
}
module.exports={generateToken,GenerateRefreshToken,verifyToken};