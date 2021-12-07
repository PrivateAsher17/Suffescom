const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://ashwani:ashwani@cluster0.jeuwm.mongodb.net/Cluster0?retryWrites=true&w=majority"

// "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

// "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"



const connectToMongo=()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully")
    })
}

module.exports = connectToMongo