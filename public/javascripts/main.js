/**
 * Created by marina on 11/11/13.
 */
$(function() {
    $("#send").on("click", function()
    {
        var user = $("#user").val();
        var pass = $("#pass").val();
        $.ajax({
            type: "POST",
            url: "signin",
            data: { user: user, pass: pass }
        })
            .done(function( msg ) {
                alert( "Data Saved: " + msg );
            });
    })
});