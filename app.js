const express = require('express');
require('./db/connections');
const User = require("./models/users");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());



//            question 1

app.post('/users', async (req,res) => {

    try{
        const user = new User(req.body);
        const createUser = await user.save();
        res.status(200).send(createUser);

    }catch(err){
        res.status(404).send(err);
    }

});







//                   question 2

app.get('/users', async (req,res) => {
   
    try{
        const findUser = await User.find();
        res.status(200).send(findUser);
    }catch(err) {
        res.status(404).send(err);
    }
})






//                        question 3

app.get('/users/:id',async (req,res) => {
    try{

        const _id = req.params.id;
        const userData =  await  User.findById({_id});
        res.send(userData);

    }catch(err){
        res.status(500).send(err);
    }
});








//                              question 4
app.patch("/users/:id", async (req,res) => {
    try{
      const _id = req.params.id;
      const updateUsers = await User.findByIdAndUpdate(_id, req.body);
      res.send(updateUsers);
    }catch(err) {
       res.status(404).send(err);
    }
});





//                               question 5

app.delete('/users/:id', async(req,res) => {
    try{
        
        const deleteUser = await User.findByIdAndDelete(req.params.id );
        res.send(deleteUser);
    }catch(err){
        res.status(404).send(err);
    }
});


app.listen(port);