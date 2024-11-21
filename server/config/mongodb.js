import mongoose from "mongoose";


const connectDB = async () => {
    console.log(process.env.MONGODB_URI);
    mongoose.connect(`${process.env.MONGODB_URI}/appointments`).then(() => console.log("Connected to DB"))
        .catch(err => console.log(err));
}

export default connectDB