
/*
 * GET users listing.
 */
var uservalid = "Marina";
var passvalid = "1234";
exports.login = function(req, res){

    var user = req.body.user;
    var pass = req.body.pass;
    if (user === uservalid && pass ===passvalid)
    {
        res.send ("User and password is valid");
    }
    else
    {
        res.send ("User or password is invalid");
    }

    console.log (user + pass);

};