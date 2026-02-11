const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { validateListing, isLoggedIn, isOwner } = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const { cloudinary, storage } = require("../cloudConfig.js");
const multer = require("multer");
const Listing = require("../models/listing.js");
const upload = multer({ storage });

router
 .route("/")
 .get(wrapAsync(listingController.index))   //index route
 .post(           //add new listing
    isLoggedIn,        
    upload.single("listing[image][url]"),
    validateListing, 
    wrapAsync(listingController.addNewListing)
); 
    
// listings/category/:category
router
 .route("/category/:category")
 .get(listingController.category);


 // listings/search/:country
router.get("/search/:country", listingController.country);



//create new listing form
router.get("/new", isLoggedIn, listingController.renderNewForm);


router
 .route("/:id")
 .get(wrapAsync(listingController.showListing))   //show route
 .put(isLoggedIn,            //add the updation
    isOwner, 
    upload.single("listing[image][url]"), 
    validateListing,
    wrapAsync(listingController.updateListing))   
   .delete(isLoggedIn,               //destroy listing
    isOwner, 
    wrapAsync(listingController.destroyListing))
 .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing)
);
    



//edit listing form
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));






module.exports = router;