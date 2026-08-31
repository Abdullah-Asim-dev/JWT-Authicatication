const dns =require('dns')
dns.setServers(["8.8.8.8","8.8.4.4"])
const express=require('express');
const mongoose =require('mongoose')
const signupRouter=require('./routes/Signup');
const loginRouter=require('./routes/login');
const bodyParser=require('body-parser');
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();
const CreateAdminAccount=require('./scripts/admin')
const app=express();
const port=process.env.PORT || 3000;
dotenv.config();
app.use(bodyParser.json())
app.use(cors());
CreateAdminAccount();
app.use('/signup',signupRouter);
app.use('/auth',loginRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})