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
                    regPassword: {
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
                    companyName: "Podaj nazwę firmy",
                    street: "Podaj nazwę ulicy",
                    city: "Podaj nazwę miasta",
                    zip: "Podaj kod pocztowy",
                    email: {
                        required: "Wpisz adres e-mail",
                        email: "Wpisz poprawny adres e-mail",
                    },
                    phone: "Podaj numer telefonu",
                    mobile: "Podaj numer telefonu",
                    myName: "Podaj swoje imię",
                    surname: "Podaj swoje nazwisko",
                    yourEmail: "Podaj swój adres e-mail",
                    position: "Podaj swoje stanowisko",
                    regPassword: {
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

                                    if (response.status == 1 && response.redirect != undefined) {
                                        window.location = response.redirect;
                                        $("ul").append($("<div>",{"class":"alert alert-success"}).html(data.message));
					$(".tab-content").remove();
                                    } else {
                                        unblockButton();
                                        $('.alert').alert()
                                        $('#auth-container .alert-danger').addClass("visible");
                                    }
                                });

                            return false;
                        };


                    });
            });