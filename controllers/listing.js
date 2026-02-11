const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");

//index route
module.exports.index = async (req, res, next) => {
    let listings = await Listing.find({});
    res.render("listings/index.ejs", { listings });
};


// listings/category
module.exports.category = async(req, res) => {
   let { category:category1 } = req.params; 
   let listings = await Listing.find({category: category1});
   res.render("listings/index.ejs", { listings });
};


// listings/search/:country
module.exports.country = async(req, res) => {
    let { country:country1 } = req.params;
    let listings = await Listing.find({ country : country1 });
    res.render("listings/index.ejs", { listings });
};

//render form for create new listing
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

//add new listing in database
module.exports.addNewListing = async (req, res, next) => {
    let listing = req.body.listing;
    let { path:url, filename } = req.file;
    listing.image = { url, filename };
    listing.owner = res.locals.currUser._id;
    await new Listing(listing).save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

//show listing
module.exports.showListing = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(`${id}`).populate
    ({ path: "reviews", populate: { path: "author"} }).populate("owner");
    if(!listing){
        req.flash("error", "Listing you Requested does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
};


//render edit page of listing
module.exports.renderEditForm = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(`${id}`);
    if(!listing){
        req.flash("error", "Listing you Requested does not exist!");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload/", "/upload/h_150,w_180/");

    res.render("listings/edit.ejs", { listing, originalImageUrl });
};



//update listing
module.exports.updateListing = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(`${id}`, {...req.body.listing});
    if(typeof req.file !== "undefined"){
        let { path:url, filename } = req.file;
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};


//destroy/deleting listing 
module.exports.destroyListing = async (req, res, next) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(`${id}`);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};


