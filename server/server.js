const express = require('express')
const sqlconnection = require("./config")
const bodyParser = require('body-parser')
const app = express();


// connect database

sqlconnection;

app.get("/",(req,res) => res.send('API Running'))

// middleware

app.use(bodyParser.json({extended:false}))


// // Requiring Routes
// const usersRoute = require("./routes/api/users");

// // Define routes
// app.use("/api/users" , usersRoute)


const PORT = process.env.PORT || 5000;



app.listen(PORT , () => console.log(`Server started on port ${PORT}`));