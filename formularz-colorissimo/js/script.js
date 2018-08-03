$(function () {
    $("#link-remind").click(function () {
        $("#remind-panel a").click();
    });

    $("#link-return").click(function () {
        $("#log-panel a").click();
    });

    
    function unblockButton() {
//        $('.btn-default span').removeClass("hide-text");
        $('.btn-default').prop("disabled", false);
//        $('.spinner').hide();
    };

    $("form").submit(function (event) {

//        $('.btn-default span').addClass("hide-text");
//        $('.spinner').show();
//        $('.btn-default').prop('disabled', true);
//        setTimeout(unblockButton, 4000);
          var $buttonClick = $(this).find('button');
       
        $buttonClick.attr("disabled", true);
         setTimeout(unblockButton, 4000);
//        jQuery.post('https://colorissimo.com/default/login/process', {
//referrer: '/', 
//   login: 'kamil@goodcode.pl', //zastapic danymi z inputa
//   pass: 'h77912', // zastapic danymi z inputa
//   remember_me: 0
//}, function(response) {
//if(data.status == 1 && data.redirect != undefined) {
//       console.log('zalogowano');
//   } else {
//       console.log('blad.');
//       console.log('odblokuj przycisk.');
//       console.log('wyswietl komunikat bledu.');
//   }
//})

        return false

    });
});