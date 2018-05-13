//$(function () {
    'use strict';
//    'use strict';
//
//    $("#btn").click(function () {
//        var dane = "";
//       
//        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {
//              $('#btn').after($('<div/>', {
//                id: 'dane-programisty'
//            }));
//            dane = ("Dane programisty: imię: " + data.imie + ", nazwisko: " + data.nazwisko + ", zawód: " + data.zawod + ", firma: " + data.firma);
//            document.getElementById("dane-programisty").innerHTML = dane;
//        });
//
//    });
//
//
//
//});

//'use strict';
//var ludzie = {
//    "pracownicy":[
//        {"firstName": "Krystian", "lastName": "Dziopa"}, 
//        {"firstName": "Anna", "lastName": "Szapiel"},
//        {"firstName": "Piotr", "lastName": "Żmuda"}
//    ]
//}
//
//console.log(ludzie.pracownicy);
//
//ludzie.pracownicy.forEach(function(element, index){
//    console.log(index + ": " + element.firstName + " " + element.lastName );
//    
//});


class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }
    
    opiszKsiazke() {
        if(this.przeczytana === true) {
            return "Ksiażka ma tytuł " + this.tytul + " jej autorem jest " + this.autor + " i została przeczytana."
        } else {
            return "Ksiażka ma tytuł " + this.tytul + " jej autorem jest " + this.autor + " i nie została przeczytana."
        }
    }
}


var dzienniki = new Ksiazka('Dzienniki', 'Agnieszka Osiecka', false);
var opowiadania = new Ksiazka('Opowiadania', 'Jarosław Iwaszkiewicz', false);
var poezja = new Ksiazka('Poezja', 'Joanna Kowal', true);

dzienniki.opiszKsiazke;
opowiadania.opiszKsiazke;
poezja.opiszKsiazke;

var tablicaKsiazki = [dzienniki, opowiadania, poezja];

function iloscPrzeczytanych(tablicaKsiazki) {
  var suma = 0;
  
  for(var i=0; i<tablicaKsiazki.length; i++) {
    if (tablicaKsiazki[i].przeczytana === true) {
      suma += 1;
     } 
    
    console.log(tablicaKsiazki[i].opiszKsiazke());
  }

  console.log('Ilosc przeczytanych ksiazek wynosi: ' + suma);
}

iloscPrzeczytanych(tablicaKsiazki);