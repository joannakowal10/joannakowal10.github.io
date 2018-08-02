$(function () {
    $("#link-remind").click(function () {
        $("#remind-panel a").click();
    });

    $("#link-return").click(function () {
        $("#log-panel a").click();
    });

    function showText() {
        $('#btn-log span').removeClass("hide-text");
        $('#btn-log').prop("disabled", false);
        $('.sk-double-bounce').hide();
    };

    $("#log-form").submit(function (event) {

        $('#btn-log span').addClass("hide-text");
        $('.sk-double-bounce').show();
        $('#btn-log').prop('disabled', true);
        setTimeout(showText, 4000);


        return false

    });
});