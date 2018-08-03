$(function () {
    $("#link-remind").click(function () {
        $("#remind-panel a").click();
    });

    $("#link-return").click(function () {
        $("#log-panel a").click();
    });

    
    function unblockButton() {
//   
        $('.btn-default').prop("disabled", false);
//     
    };

    $("form").submit(function (event) {
          var $buttonClick = $(this).find('button');
       
        $buttonClick.attr("disabled", true);

        return false

    });
});