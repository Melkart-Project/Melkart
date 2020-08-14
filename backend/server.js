
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const config = require("config");

const bodyParser = require("body-parser");
const uri = process.env.URI;


const PORT = process.env.PORT || 8080;
const app = express();



const db = config.get("MONGO_URI");

//middlewares
app.use(cors());

//authentication siwar don't touch
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());




const authRoute = require("./routes/auth.js");
const stock = require('./routes/stock')


// ************mongod DB*************
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected successfully");
});


//data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//********************* */
//*******routes******** */



//.........Use routes...............






// stock path
app.use('/stock', stock)



// work order path
app.use("/api/workOrder", workOrder);

app.listen(PORT, console.log(`server is running on port ${PORT}`));
