const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const { validatePassword } = require('../Lib/authuUtils');
const User = require('../Models/user')
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async (username, password, done) => {
        try {
            const user = await User.findOne({ email: username }).exec()
            if (!user) {
                return done(null, false, { message: 'Incorrect Email.' });
            }
            const isValid = validatePassword(password, user.password)
            if (!isValid) {
                return done(null, false, { message: 'Incorrect Password.' });
            }
            return done(null, user);
        }
        catch (err) {
            done(err)
        };
    }
));

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((userId, done) => {
    User.findById(userId)
        .then((user) => {
            done(null, user);
        })
        .catch(err => done(err))
});