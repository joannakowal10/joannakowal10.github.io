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
        $('.btn-default').prop('disabled', true);
        setTimeout(unblockButton, 4000);


        return false

    });
});