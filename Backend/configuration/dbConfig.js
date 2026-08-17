const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGO_URI,{
    // 4 second tak ager server database sa baat na kare toh band kar doo
    ServerSelectionTimeoutMS: 4000,
});
mongoose.connection.on('connected',()=>{
    console.log('MongoDB connected successfully');
})
mongoose.connection.on('error',(err)=>{
    console.log('MongoDB connection error:',err);
})
module.exports=mongoose;