
const express = require('express');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let studentroutes = require('./routes/studentroutes');
const app = express();

app.get('/person', function(req, res){
    res.render('person');
});

app.set('view engine', 'html');
app.set('views', './Frontend/Josephine');

var port = process.env.PORT || 8081;

//connect to mongoose
const dbPath = 'mongodb://localhost:27017/students-db';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}
const mongo = mongoose.connect(dbPath, options);

//handle errors
mongo.then(()=>{
    console.log('connected');
}, error => {
    console.log(error, 'error');
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//use API routes in the app
app.use('/students', studentroutes);

app.post('/', function(req, res){
    console.log(req.body);
    res.send("received your application");
});


app.listen(port, function(){
    console.log("app is running on port "  +port)
});
