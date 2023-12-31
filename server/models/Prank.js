const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const pranksSchema = new Schema({
    title: {
        type: String,
        required: true,
    }, 
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    inPerson: {
        type: Boolean,
        required: true
    }
});

const Prank = model("Prank", pranksSchema, "Prank");

module.exports = Prank;