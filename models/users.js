const express = require('express');
const validator = require('validator');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        min: 3

    },
    email : {
        type : String,
        required : true,
        unique : [true,"Email already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new console.error("INVALID");
            }
        }
    },
    contact : {
        type : Number,
        required : true
    },
    ward : {
        type :  Number,
    },
    address : {
        type : String
    },
    password : {
        type : String
    }
});


const User = new mongoose.model("User",userSchema);

module.exports = User;