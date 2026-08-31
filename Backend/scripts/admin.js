const User = require('../models/User')
const bcrypt = require('bcrypt')

async function CreateAdminAccount() {
   try {
    // check karo agar is email sa admin already exist karta hai, warna is email sa admin create karo
    const existingUser = await User.findOne({ email: 'admintest@gmail.com' })

    if (existingUser) {
        console.log('admin account already exists')
        return
    }

    // agar exist nahi karta, toh password ko hash ma convert karo bcrypt sa
    const hashPassword = await bcrypt.hash('admin123', 10)

    const admin = new User({
        name: 'Admin',
        email: 'admintest@gmail.com',
        password: hashPassword,
        role: 'admin'
    })

    const SavedAdmin = await admin.save()
    console.log('admin account succesfully created ', SavedAdmin)
   } catch (error) {
    console.log(error.message)
   }

}

module.exports = CreateAdminAccount;