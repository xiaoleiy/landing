/**
 * Created by xiaoleiyu on 15-3-5.
 */
var User = mongoose.model('User', mongoose.Schema({
    username: String,
    password: String,
    email: String,
    tel: Number,
    role: String
}));

module.exports = {
    register: function (u) {
        var user = new User(u);
        user.save(function(err){
            if (err) console.info('failed to save user: ' + user);
        });
    },

    modify: function(user) {

    },

    login: function (user) {
        User.findOne(user, {});
    },

    isRegistered: function (user) {

    },

    checkEmail: function (email) {

    },

    checkTel: function (tel) {

    },

    loginAsQQ: function () {

    }
};