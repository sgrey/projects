/**
 * Created by marina on 11/12/13.
 */
exports.newuser = function(req, res){

    var name = req.body.user;
    var userpass = req.body.userpass;
    var userpassword = req.body.userpassword;
    if (userpass === userpassword)
    {
        res.send ("New user is registrated");
    }
    else
    {
        res.send ("Wrong password! Rewrite it!");
    }

    console.log (name + password);

};