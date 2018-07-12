'use strict';
$(document).ready(function () {
    $("#btn-accept").click(function () {
        $("#accept").show();
        $("#content-inner").hide();
    });
   $(".btn-return").click(function (){
      $("#accept").hide();
        $("#content-inner").show();
   });
    $("#btn-resignation").click(function () {
        $("#form-section").show();
        $("#content-inner").hide();
});
$("#send").click(function () {
        $("#resignation").show();
        $("#form-section").hide();
});
   
    })
     
