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
            companyName: "required",
            street: "required",
            city: "required",
            zip: "required",
            email: {
                required: true,
                email: true
            },

            phone: "required",
            mobile: "required",
            myName: "required",
            surname: "required",
            yourEmail: "required",
            position: "required",
            regPassword: "required",
            defaultCheck1: "required",
            defaultCheck2: "required"

        },

        messages: {
            companyName: "Podaj nazwę firmy",
            street: "Podaj nazwę ulicy",
            city: "Podaj nazwę miasta",
            zip: "Podaj kod pocztowy",
            email: {
                required: "Wpisz adres e-mail",
                email: "Twój adres musi zawierać @"
            },
            phone: "Podaj numer telefonu",
            mobile: "Podaj numer telefonu",
            myName: "Podaj swoje imię",
            surname: "Podaj swoje nazwisko",
            yourEmail: "Podaj swój adres e-mail",
            position: "Podaj swoje stanowisko",
            regPassword: "Podaj hasło",
            defaultCheck1: "Zaznacz to pole jeśli chcesz kontynować",
            defaultCheck2: "Zaznacz to pole jeśli chcesz kontynować",

        }
    });

    $("#regForm").submit(function (event) {

        if($("#regForm").valid()) {

            var $buttonClick = $(this).find('button').first();

            $buttonClick.attr("disabled", true);

            $.post('https://colorissimo.com/default/register/add')
          console.log("test");    
        } 
        
        else {
            alert("BŁĄD")
            console.log("test");  
        }
        
        return false;
    });


});