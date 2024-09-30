const mongoose = require("mongoose");

//Write missing code here for database connection

const connection = mongoose.connect(process.env.MongoDB_URL).then(
    () => {
        console.log("connected to database");
    }
).catch((err)=>{
    console.log("error in connection");
})
// module.exports = connection;