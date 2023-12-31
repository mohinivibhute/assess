const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// set up express
const app = express();
app.use(express.json());
app.use(cors());

// this variable is for online hosting like heroku or our localhost:5000
const PORT = process.env.PORT || 6000;

/*app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// set up mongoose
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (error) => {
    if (error) throw error;
    console.log("MongoDB connection established");
  }
);*/
mongoose.connect('mongodb://127.0.0.1:27017/acess') 
        .then(() => console.log('Connected!'))
         .catch((err)=>console.log(err));
          app.listen(PORT,()=>{ 
            console.log(`connection successfully ${PORT}`);
         })
         

// set up routes

// user routes
app.use("/users", require('./routes/userRouter'));
