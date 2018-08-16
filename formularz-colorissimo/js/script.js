$(function () {
    $("#link-remind").click(function () {
        $("#remind-panel a").click();
    });

    $("#link-return").click(function () {
        $("#log-panel a").click();
    });



    $("#log-form").submit(function (event) {

        var $btnSubmit = $(this).find('button').first();
        $btnSubmit.attr("disabled", true);

        $.post('https://colorissimo.com/default/login/process', $(this).serializeArray(), {
            //            referrer: '/',
            login: $('#user').val(),
            pass: $('#log-password').val(),
            remember_me: 0
        }, function (response) {

            if (response.status == 1 && response.redirect != undefined) {
                window.location = response.redirect;
            } else {
                $btnSubmit.attr("disabled", false);
                $('#log-form .alert-danger').addClass("visible");
            }
        });

        return false

    });

    $.validator.addMethod("regex", function (value, element, params) {
        return value.match(params.pattern) ? true : false;
    });


    $("#reg-form").validate({

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
            rule_1: "required",
            rule_2: "required"

        },

        messages: {
            name: "Podaj nazwę firmy",
            street: "Podaj nazwę ulicy",
            city: "Podaj nazwę miasta",
            postal_code: "Podaj kod pocztowy",
            email: {
                required: "Podaj adres e-mail",
                email: "Podaj poprawny adres e-mail",
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
            rule_1: "Zaznacz to pole jeśli chcesz kontynować",
            rule_2: "Zaznacz to pole jeśli chcesz kontynować",

        }
    });

    $("#reg-form").submit(function (event) {

        if ($("#reg-form").valid()) {

            var $btnSubmit = $(this).find('button').first();
            $btnSubmit.attr("disabled", true);

            $.post('https://colorissimo.com/default/register/add', $(this).serializeArray(), function (response) {

                if (response.status == 1) {

                    successMessage('#reg-form', response.message);

                    $btnSubmit.attr("disabled", false);
                    $('#reg-form')[0].reset();

                } else {
                    $btnSubmit.attr("disabled", false);
                    $('#reg-form .alert-danger').addClass("visible");
                    console.log("blabla");
                }
            });

            return false;
        };
    });

    $('#remind-form').validate({
        rules: {
            mail: {
                required: true,
                email: true
            }
        },
        messages: {
            mail: {
                required: "Podaj adres e-mail",
                email: "Podaj poprawny adres e-mail"
            }

        }

    })

    $('#remind-form').submit(function (event) {
console.log($("#remind-form").valid())
        ;
        if ($("#remind-form").valid()) {

            var $btnSubmit = $(this).find('button').first();
            $btnSubmit.attr("disabled", true);

            $.post('https://colorissimo.com/default/login/remind', $(this).serializeArray(), function (response) {

                if (response.status == 1) {
                    console.log("test2");
                    $btnSubmit.attr("disabled", false);
                    successMessage("#remind-form", response.message);

                } else if (response.status == 3) {
                    $btnSubmit.attr("disabled", false);
                    $('#remind-form .alert-danger').addClass("visible");
                }
            });

            return false;
        }
    });

});

function successMessage(formId, htmlMessage) {
    var $successMessage = $(formId + ' .alert-success');
    $successMessage.html(htmlMessage);
    $successMessage.addClass("visible");
}



var tablica = ['Ania', 'Emil', 'Gosia'];
console.log(tablica[2]+ ' i ' + tablica[1]);
tablica.push('Asia');
tablica.pop();
tablica.unshift('Łukasz', 'Antoś');
console.log(tablica);
tablica.reverse();
tablica.sort();
console.log(tablica.join(' i '));

class Ludzie {
    constructor(imie, nazwisko){
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    wyswietlInfo() {
        console.log("Imię: " + this.imie + " wiek: " + this.nazwisko);
    }
}

var asia = new Ludzie('Joanna', '31');
asia.wyswietlInfo();

var iwona = new Ludzie ('Iwona', '876');
iwona.wyswietlInfo();

var krystian = new Ludzie ('Krystian', '15');
krystian.wyswietlInfo();


var x = 1;
if (x == 1) {
    console.log('Liczba równa się 1');
};

if (x == 3) {
    console.log('Liczba równa się 3')
}

else {
    console.log('Liczba równa się 1')
};


