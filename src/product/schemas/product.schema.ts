import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
    name: {type:String, required:[true, 'title is required']},
    description: {type:String, required:[true, 'Description is required']},
    imageUrl: {type:String, required:[true, 'Image is required']},
    price: {type:Number, required:[true, 'Price is requrired']}
}, {timestamps:true});    