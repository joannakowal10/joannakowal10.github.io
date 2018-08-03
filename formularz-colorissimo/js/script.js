$(function () {
    $("#link-remind").click(function () {
        $("#remind-panel a").click();
    });

    $("#link-return").click(function () {
        $("#log-panel a").click();
    });

    function unblockButton() {
        $('.btn-default').prop("disabled", false);
    };

    $("#log-form").submit(function (event) {

        var $buttonClick = $(this).find('button');

        $buttonClick.attr("disabled", true);

        $.post('https://colorissimo.com/default/login/process', {
            referrer: '/',
            login: $('#user').val(),
            pass: $('log-password').val(),
            remember_me: 0
        }, function (response) {

            if (response.status == 1 && response.redirect != undefined) {
                window.location = response.redirect;
            } else {
                unblockButton();
                $('.message').text("Error");
            }
        });

        return false

    });
});