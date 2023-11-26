import mongoose from 'mongoose';


const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Connected to MongoDB Database ${conn.connection.host}`)
    }
    catch(error){
        console.log(`Error in MongoDB ${error}`)
    }
}


export default connectDB;