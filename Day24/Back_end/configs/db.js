//"mongodb+srv://sumonpal495:<db_password>@cluster0.swf5t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mongoose =require('mongoose');

const connectDB =mongoose.connect("mongodb+srv://sumonpal495:sumon@cluster0.swf5t.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0");

module.exports ={
    connectDB
}