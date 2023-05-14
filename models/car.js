const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const carSchema=new Schema(
    { 
        id: {
        type: Number,
        required: true,
        unique: true,
        },  
        brand:{
            type:String,
            required: true
        },
        model:{
            type:String,
            required: true
        },
        color: {
            type: String,
            required: true,
        },
        unit_price: {
            type: Number,
            required: true,
        }
    }
);
const car= mongoose.model('All_Car',carSchema);
module.exports=car;