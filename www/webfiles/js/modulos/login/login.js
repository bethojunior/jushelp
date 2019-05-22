viewController.setObserver("login", function () {
    $('.modal').modal();
    const elementProperty = new ElementProperty();

    elementProperty.addEventInElement('#sing','onclick',function(){
        preload(true);
        let dataUser = {};
        dataUser.name = document.getElementById('email').value;
        dataUser.password = document.getElementById('password').value;

        // if(dataUser.name === '' || dataUser.password === ''){
        //     preload(false)
        //     Materialize.toast('Você precisa preencher todos os campos' , 1500);
        //     return
        // }


        //login FALSO
        Route.redirectDynamic('Main','Index')
        preload(false)

        // CustomerController.authenticate(dataUser).then(result => {
        //     console.log(result)
        // })

    });

    elementProperty.addEventInElement('#singup','onclick',function(){
        Route.redirectDynamic('Main','Signup')
    });

    elementProperty.addEventInElement('#forgotPassword','onclick',function(){
        $('#releasePassword').modal('open');
    });

    elementProperty.addEventInElement('#btnReleasePassword','onclick',function(){
        elementProperty.getElement('#emailForgot' , email => {
            if(email.value !== '' || email.value !== ' '){
                // let user = {};
                // user.email = email.value;
                // CustomerController.forgotPassword(user).then(resolve => {
                //     console.log(resolve);
                // });
                swal('Aguarde um momento','Em instantes você receberá um email com instruções para redefinir sua senha','success');
                $('#releasePassword').modal('close');
                return
            }
        })

    });

    elementProperty.addEventInElement('.showPassword','onclick',function(){
        elementProperty.getElement('#password', show => {
            if(show.getAttribute("type") === "password"){
                show.setAttribute("type" , "text");
                elementProperty.getElement('.showPassword' , change => {
                    change.innerHTML = "visibility_off";
                });
                return;
            }
            show.setAttribute("type" , "password");
            elementProperty.getElement('.showPassword' , change => {
                change.innerHTML = "remove_red_eye";
            });
        });
    });

    Route.pageDynamic();
});