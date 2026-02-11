const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

//create new review and post in database
module.exports.newReview = async(req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(`${id}`);
    let newReview = new Review(req.body.review);
    newReview.author = res.locals.currUser._id;
    await newReview.save();
    listing.reviews.push(newReview);
    await listing.save();
    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${id}`);
};

//delete review
module.exports.destroyReview = async(req, res) => {
    let { id, reviewId } = req.params;
    let listing = await Listing.findByIdAndUpdate(`${id}`, {$pull: {reviews: reviewId}});
    let review = await Review.findByIdAndDelete(`${reviewId}`);
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
};