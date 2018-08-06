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

        var $buttonClick = $(this).find('button').first();

        $buttonClick.attr("disabled", true);

        $.post('https://colorissimo.com/default/login/process', {
            referrer: '/',
            login: $('#user').val(),
            pass: $('#log-password').val(),
            remember_me: 0
        }, function (response) {

            if (response.status == 1 && response.redirect != undefined) {
                window.location = response.redirect;
            } else {
                unblockButton();
                $('.alert').alert()
                $('#auth-container .alert-danger').addClass("visible");
            }
        });

//        return false

    });


    $().ready(function () {

        $("#reg-form").validate({
            rules: {
                companyName: {
                    required: true,
                    minlength: 3
                },
                street: {
                    required: true},
                email: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                companyName: {
                    require: "Proszę podać nazwę firmy",
                },
            }

        });
    });
});