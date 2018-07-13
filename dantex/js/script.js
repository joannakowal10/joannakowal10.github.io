'use strict';
$(document).ready(function () {
    $("#btn-accept").click(function () {
        $("#accept").show();
        $("#content-inner").hide();
    });
   $(".btn-return").click(function (){
      $("#accept").hide();
       $("#resignation").hide();
       $("#form-section").hide();
        $("#content-inner").show();
   });
    $("#btn-resignation").click(function () {
        $("#form-section").show();
        $("#content-inner").hide();
})
//        .click ();
$("form").submit(function () {
        $("#resignation").show();
        $("#form-section").hide();
    return false;
});
   
    })
//     
