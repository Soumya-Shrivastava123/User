const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/User")
.then( () => {console.log("Connection Successfull")})
.catch( () =>   {console.log(err)});