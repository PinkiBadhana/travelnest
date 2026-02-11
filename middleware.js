const { listingSchema, reviewSchema } = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");
const Listing = require("./models/listing.js");
const Review = require("./models/review.js");



//check user is logged in or not
module.exports.isLoggedIn = (req, res ,next) => {
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be Logged in to create Listing!");
        return res.redirect("/login");
    }
    next();
}

//save redirect url
module.exports.savedRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

//check owner of listing is currUser?
module.exports.isOwner = async(req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(`${id}`);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error", "You are not owner of this Listing");
        return res.redirect("/listings");
    }
    next();
}

//check author of review is currUser?
module.exports.isReviewAuthor = async(req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(`${reviewId}`);
    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error", "You are not author of this review");
        return res.redirect(`/listings/${id}/reviews/${reviewId}`);
    }
    next();
}



//listing
//validatelisting
module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}

//reviews
//validateReview
module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}