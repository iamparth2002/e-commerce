import mongoose from "mongoose"
const {Schema,model,models} = mongoose

const ProductSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    picture:{
        type:String,
        required:true,
    },
})

const ProductModel =models?.Product || model('Product', ProductSchema);
module.exports = ProductModel