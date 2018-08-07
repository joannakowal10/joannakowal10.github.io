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




    $("#regForm").submit(function (event) {
        console.log("shbsdhc");
        return false;
    });

    $("#regForm").validate({
        rules: {
            companyName: "required",
            street: "required",
            city: "required",
            zip: "required",
            email: {required: true,
                   email: true},
            mobile: "required",
            website: "required",
             name: "required",
             surname: "required",
             yourEmail: "required",
             regPassword: "required",
            defaultCheck1: {required: "#defultCheck1:checked"}, 
            defaultCheck2: "required", 
            
            
            
        },

        messages: {
            companyName: "Podaj nazwę firmy",
            street: "Podaj nazwę ulicy",
            city: "Podaj nazwę miasta",
            zip: "Podaj kod pocztowy",
            email: {required: "Wpisz adres e-mail",
                   email: "Twój adres musi zawierać @"},
            mobile: "Podaj numer telefonu",
            website: "Podaj adres strony internetowej",
            name: "Podaj swoje imię",
             surname: "Podaj swoje nazwisko",
             yourEmail: "Podaj swój adres e-mail",
             regPassword: "Podaj hasło",
            defaultCheck1: "Zaznacz to pole jeśli chcesz kontynować", 
            defaultCheck2: "Zaznacz to pole jeśli chcesz kontynować",
            

        }



        //
        //        $("#regForm").validate({
        //            rules: {
        //                companyName: "required"
        //            },
        //            
        //            messages: {
        //                companyName: "Proszę podać nazwę firmy"
        //            }
        //        });


    });
});