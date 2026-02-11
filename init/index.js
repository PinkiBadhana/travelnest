const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");


// const MONGO_URL = "mongodb://127.0.0.1:27017/travelnest";

const dbUrl = process.env.ATLASDB_URL;

main()
  .then(()=>{
    console.log("connection successful");
   })
   .catch((err) => console.log(err));
async function main(){
    await mongoose.connect(dbUrl);
}

const storingData = async (data) => {
    await Listing.insertMany(data);
    console.log("data was saved successfully");
};


storingData(initData.data);