const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const connectDatabase = require('./databse/database');

const app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

connectDatabase();

const user=require("./routes/userRoute"); 
app.use("/api/v1",user);


const PORT=3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});