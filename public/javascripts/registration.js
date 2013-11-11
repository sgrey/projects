/**
 * Created by marina on 11/12/13.
 */
$(function() {
    $("#registrate").on("click", function()
    {
        var name = $("#name").val();
        var userpass = $("#userpass").val();
        var userpassword = $("#userpassword").val();
        $.ajax({
            type: "POST",
            url: "registrate",
            data: { name: name, userpass: userpass, userpassword: userpassword }
        })
            .done(function( msg ) {
                alert( "Data Saved: " + msg );
            });
    })
});