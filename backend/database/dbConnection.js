import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"MEDIAPPOINT"
    }).then(()=>{
        console.log("Db is Connected");
    }).catch((err)=>{
        console.log(`Db is not Connected${err}`);
    })
}
