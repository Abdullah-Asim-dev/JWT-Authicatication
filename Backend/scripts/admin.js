const User=require('../models/User')
const bcrypt=require('bcrypt')

async function CreateAdminAccount() {
   try{
    // is ma check karo ager ager yeh email sa admin toh theek warna is email sa admin create kare
const existingUser=await User.findOne({email:'admintest@gmail.com'})
if(Existingadmin){
    console.log('admin account already exists')
    return
}
// ager exist karta hai toh isko hash ma convert karo .bcrypt sa 
const hashPassword=await bcrypt.hash(admin123,10)
const  admin=new User ({
    name:'Admin',
    email:'admintest@.com',
    password:hashPassword,
    role:admin
}) 
const SavedAdmin=await admin.save()
console.log('admin account succesfully created ',SavedAdmin)  
   } catch(error){
    console.log(error.message)
   }

}

module.exports=CreateAdminAccount;