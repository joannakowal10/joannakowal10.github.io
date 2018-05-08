$(function(){
    'use strict';
    
    $("#btn").click(function() {
        var dane = "";
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data) {
            dane = ("Dane programisty: imię: " + data.imie + ", nazwisko: " + data.nazwisko + ", zawód: " + data.zawod + ", firma: " + data.firma );
            document.getElementById("output").innerHTML = dane;
        });
        
    });
    
    
    
});