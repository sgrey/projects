/**
 * Created by marina on 11/12/13.
 */
exports.newuser = function(req, res){

    var name = req.body.user;
    var pass = req.body.pass;
    var password = req.body.password;
    if (pass === password)
    {
        res.send ("New user is registrated");
    }
    else
    {
        res.send ("Wrong paswword! Rewrite it!");
    }

    console.log (name+ password);

};