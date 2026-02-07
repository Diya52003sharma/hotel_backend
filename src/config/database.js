const mongoose=require('mongoose')
const connectDB=async()=>
{
    try{
        await mongoose.connect('mongodb+srv://diya:5112003@food.bgm0i8m.mongodb.net/')
        console.log("DATABASE CONNECTED");
    }
    catch(err)
    {
        console.log("failed db conection")   
    }
}
module.exports=connectDB;