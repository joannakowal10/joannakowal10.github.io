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

    $("#logForm").submit(function (event) {

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

        return false

    });

    $.validator.addMethod("regex", function (value, element, params) {
        return value.match(params.pattern) ? true : false;
    });


    $("#regForm").validate({

        errorPlacement: function (error, element) {
            console.log(element.attr("name"));
            if (element.attr("type") == "checkbox") {
                error.appendTo(element.closest(".checkbox"));

                return;
            } else {
                error.insertAfter(element);
            }
        },

        rules: {
            name: "required",
            street: "required",
            city: "required",
            postal_code: "required",
            email: {
                required: true,
                email: true
            },

            phone: "required",
            mobile: "required",
            agent_firstname: "required",
            agent_lastname: "required",
            agent_email: "required",
            agent_position: "required",
            pass: {
                required: true,
                minlength: 8,
                regex: {
                    pattern: /^((?=.*\W+)|(?=.*\d)|(?=.*[A-Z]))(?=.*[a-z])(?![.\n]).*/
                }
            },
            defaultCheck1: "required",
            defaultCheck2: "required"

        },

        messages: {
            name: "Podaj nazwę firmy",
            street: "Podaj nazwę ulicy",
            city: "Podaj nazwę miasta",
            postal_code: "Podaj kod pocztowy",
            email: {
                required: "Wpisz adres e-mail",
                email: "Wpisz poprawny adres e-mail",
            },
            phone: "Podaj numer telefonu",
            mobile: "Podaj numer telefonu",
            agent_firstname: "Podaj swoje imię",
            agent_lastname: "Podaj swoje nazwisko",
            agent_email: "Podaj swój adres e-mail",
            agent_position: "Podaj swoje stanowisko",
            pass: {
                required: "Wpisz hasło",
                minlength: "Hasło powinno zawierać minimum 8 znaków",
                regex: "Hasło powinno zawierać duża literę lub cyfrę lub znak specjalny"
            },
            defaultCheck1: "Zaznacz to pole jeśli chcesz kontynować",
            defaultCheck2: "Zaznacz to pole jeśli chcesz kontynować",

        }
    });

    $("#regForm").submit(function (event) {

        if ($("#regForm").valid()) {

            var $buttonClick = $(this).find('button').first();
            $buttonClick.attr("disabled", true);
            $.post('https://colorissimo.com/default/register/add', $(this).serializeArray(), function (response) {

                if (response.status == 1) {

                    $("#ok_message_reg").html(response.message);
                    unblockButton();
                } else {
                    unblockButton();
                    $('.alert').alert()
                    $('#auth-container .alert-danger').addClass("visible");
                }
            });

            return false;
        };
    });

    $("#remindForm").submit(function (event) {

        console.log("test");
        var $buttonClick = $(this).find('button').first();
        $buttonClick.attr("disabled", true);
        $form = $(this);
        $.post('https://colorissimo.com/Login/forgot', $(this).serializeArray(), function (response) {

            if (response.status == 1) {
                console.log("test2");
                unblockButton();
                $("#ok_message_rem").html(response.message);

            } else if (response.status == 3) {
                unblockButton();
                $('.alert').alert()
                //$('#auth-container .alert-danger').addClass("visible");
            }
        });

        return false;



    });

});