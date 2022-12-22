import mongoose from "mongoose";
mongoose.set('strictQuery', false);

const DB_CONNECTION_URL = "mongodb+srv://nikitagupta1709:nikitagupta1709@blog.jv3yf9w.mongodb.net/whatsapp?retryWrites=true&w=majority";

const connectDB = () => {
    console.log("DB trying to connect on "+ new Date());

//    const options = {
//     keepAlive: 1,
//     autoReconnect: true,
//     poolSize: 10,
//     useNewUrlParser: true,
//     useUnifiedTopology:true,
//    };
    return mongoose.connect(DB_CONNECTION_URL);
}

export default connectDB;