const mongoose=require("mongoose");

const connectDatabase=()=>{
    mongoose.connect("mongodb://localhost:27017/Bank"
    ,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((data)=>{
        console.log(`Mongodb connected with server:  ${data.connection.host}`);
    })
    .catch((error) => {
        console.error(`Error connecting to the database: ${error}`);
    });
}

module.exports=connectDatabase;