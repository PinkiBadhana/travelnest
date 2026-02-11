const mongoose = require("mongoose");
const Review = require("./review.js");
const User = require("./user.js");
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
            set: (v) => v === "" ? "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D" : v,
        }, 
        filename: {
            type: String,
        }
    },
    price: {
        type: Number, 
        required: true
    },
    location: {
        type: String, 
        required: true
    },
    country: {
        type: String,
        required: true
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    category: {
        type: String,
        enum: ["trending", "rooms", "beach", "iconic cities", "mountains", "arctic", "farms", "camping", "domes", "boats"],
        required: true,
    }

});


const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;


//mongoose post middleware for delete reviews which s part of current delete listing
listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing.reviews.length) {
        let del = await Review.deleteMany({_id: {$in: listing.reviews}});
        console.log(del); 
    }
});
