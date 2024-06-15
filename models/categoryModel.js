const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const {BASE_URL} = require("../config");

const categorySchema = new Schema({

    title: { type:String },

    description: { type:String },

    thumbnail: { type:String , get:(thumbnail)=>{
        return `${BASE_URL}${thumbnail}`
    }}

},
{
    timestamps:true,
    toJSON:{getters: true},
}
    
);
const Category = mongoose.model("Category ", categorySchema)
module.exports = Category; 
