const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});


//making folder for storing files/photos in cloudinary
const storage = new CloudinaryStorage({      
    cloudinary: cloudinary,
    params: {
        folder: "travelnest_DEV",
        allowd_formats: ["png", "jpeg", "jpg"],
    },
});

module.exports = { cloudinary, storage };