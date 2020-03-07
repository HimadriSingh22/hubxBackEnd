const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const con = require("./connection");
const port = 8080;
const app = express();
const Signup = require("./routes/signUp");
const Login=require("./routes/login");

const Event = require("./routes/newEvent");

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({limit:'50mb'}));
con.connectToServer(err=>{
    console.log("err:",err);
})

//routes




app.use('/signUp',Signup);
app.use('/login',Login);
// app.use('/fetchEventList',EventList);
 app.use('/event',Event);




//listen to server
app.listen(`${port}`, () => {
    console.log(`Server now listening at Port:${port}`);
});

module.exports = app;