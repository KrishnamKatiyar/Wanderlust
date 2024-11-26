const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,   
    },
    image : {
        filename : {
            type : String,
        },
        url : {
            type : String,
        default: "https://plus.unsplash.com/premium_photo-1719843013775-1a101dd75b37?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set : (v)=> v=== "" ? "https://plus.unsplash.com/premium_photo-1719843013775-1a101dd75b37?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
        },
    },
    price : {
        type : Number,
        required : true,
    },
    location : {
        type : String,
        required : true,
    },
    country : {
        type : String,
        required : true,
    },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
