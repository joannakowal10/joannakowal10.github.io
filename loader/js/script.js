$( function() {
    
    function showText(){
        $('p').show();
        $('#button').prop("disabled", false);
        $('.sk-double-bounce').hide();
    };
  

    $('#button').click( function(){
       $('p').hide();
        $('.sk-double-bounce').show();
        $(this).prop("disabled", true);
       setTimeout(showText, 3000)
    });
    
});