const User = require("../models/user.js");

//render signup form
module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};



//signup user /register user
module.exports.signup = async(req, res, next) => {
    try {
        let { username, email, password } = req.body;
        newUser = new User({username, email});
        let registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to Travelnest!")
            return res.redirect("/listings");
        });
    } catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

//render login form 
module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};


//login user
module.exports.login = async(req, res) => {
    // console.log(req.user);
    req.flash("success", "Welcome back to Travelnest!");
    let redirect = res.locals.redirectUrl || "/listings";
    res.redirect(redirect);
};


//logout user
module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        // console.log(req.user);
        req.flash("success", "Logged you out!");
        res.redirect("/listings");
    });
};
