import mongoose from "mongoose";

export const Connection= async(userName,password)=>{
    const URL=`mongodb+srv://${userName}:${password}@umakechoicedb.qgzizcz.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("success connection");
    } catch (error) {
        console.log("error connection",error.message);
    }
}

export default Connection