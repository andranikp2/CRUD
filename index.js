// var express = require("express");
// const bodyParser = require('body-parser');
// var path = require("path");
// var app = express();


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// app.get("/", function(req, res){
//  res.sendFile(path.join(__dirname,'./public/form.html'));

// });
// app.post("/addInfo", function(req, res){
//     let surname = req.body.surname;
//     let age = req.body.age;
//     console.log(surname, age);
//     res.redirect('/')
    
//    });
// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });


const mongoose = require('mongoose');

// Replace the connection string with your MongoDB connection string
const connectionString = " mongodb+srv://andranikp2:and123456@cluster0.60w9mte.mongodb.net/sample_mflix";



// Connect to MongoDB
mongoose.connect(connectionString, { useUnifiedTopology: true });

// Check the connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
console.log('Connected to MongoDB!');
// You can add additional code here for testing or other operations
// Make sure to close the connection when you're done
mongoose.connection.close();
});

try {
   const allMovies = await mongoose.connection.db.collection('movies').find().toArray(); // .insertMany(newMovies);
   
   console.log('All Movies:', allMovies);
   } catch (error) {
   console.error('Error retrieving movies:', error);
   } finally {
   mongoose.connection.close();
   }
   
   
   
   
