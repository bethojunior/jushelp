viewController.setObserver("Signup", function () {
    let dataLawer = {};
    let elementProperty = new ElementProperty();
    Mask.setMaskPhone('#firstContact');
    Mask.setMaskPhone('#secondContact');

    elementProperty.addEventInElement('#backLogin','onclick',function(){
        Route.redirectDynamic('Main','Login')
    });

    elementProperty.addEventInElement('#imgUser','onclick',function(){
        Materialize.toast('Modulo em andamento',1500);
        return;
        SwalCustom.dialogConfirm('Deseja continuar como usuário final?','' , status => {
            if(status){
                secondPass(false);
            }
        });
    });

    elementProperty.addEventInElement('#imgAdv','onclick',function(){
        SwalCustom.dialogConfirm('Deseja continuar como usuário Jurídico?','' , status => {
            if(status){
                secondPass(true);
            }
        })
    });

    elementProperty.addEventInElement('#cepLawer','onchange',function(){
        preload(true);
        CustomerController.getDataCep(this.value).then(resolve => {
            preload(false);
            if(resolve.status === 1){
                elementProperty.getElement('#addressLawer',address => {
                    let breakAddress = resolve.address;
                    breakAddress.split("-");
                    console.log(breakAddress[0])
                    address.value = breakAddress;
                });
                elementProperty.getElement('#neighborhoodLawer', neighborhood => {
                    neighborhood.value = resolve.district;
                });
            }
        })
    });

    function secondPass(isLawer){
        elementProperty.getElement('.chooseUser', pass => {
            pass.classList.add('hidden');
        });

        if(isLawer){
            elementProperty.getElement('.userLawer', div => {
                div.classList.add('show');
            });
            return;
        }
        elementProperty.getElement('.normalUser', div => {
            div.classList.add('show');
        });
    }

    elementProperty.addEventInElement('.backInit','onclick',function(){

        elementProperty.getElement('.userLawer', div => {
            if(div.classList.contains('show')){
                div.classList.remove('show');
            }
        });

        elementProperty.getElement('.normalUser', div => {
            if(div.classList.contains('show')){
                div.classList.remove('show');
            }
        });

        elementProperty.getElement('.chooseUser', pass => {
            pass.classList.remove('hidden');
        });

    });

    elementProperty.addEventInElement('.toSecond','onclick',function(){
        dataLawer.name      = document.getElementById('nameLawer').value;
        dataLawer.cotact    = document.getElementById('firstContact').value;
        dataLawer.cotactTwo = document.getElementById('secondContact').value;
        dataLawer.email     = document.getElementById('emailLawer').value;
        dataLawer.oab       = document.getElementById('oab').value;
        dataLawer.uf        = document.getElementById('uf').value;

        // if(dataLawer.name === '' || dataLawer.cotact === '' || dataLawer.email === '' || dataLawer.oab === '' || dataLawer.uf === ''){
        //     Materialize.toast('Preencha todos os campos' , 1500);
        //     return;
        // }

        secondPassLawer();

    });

    function secondPassLawer(){
        elementProperty.getElement('.firstPartLawer' , div => {
            div.classList.add('hidden');
        });
        elementProperty.getElement('.secondPassLawer', div => {
            div.classList.remove('hidden')
        });
    }

    elementProperty.addEventInElement('.backFirstLawer','onclick',function(){
        elementProperty.getElement('.firstPartLawer' , div => {
            div.classList.remove('hidden');
        });
        elementProperty.getElement('.secondPassLawer', div => {
            div.classList.add('hidden')
        });
    });

    elementProperty.addEventInElement('.btnToThird','onclick',function(){
        elementProperty.getElement('.thirdPassLawer', div => {
            div.classList.remove('hidden')
        });
        elementProperty.getElement('.secondPassLawer', div => {
            div.classList.add('hidden')
        });
    });

    elementProperty.addEventInElement('.backSecondLawer','onclick',function(){
        elementProperty.getElement('.thirdPassLawer', div => {
            div.classList.add('hidden')
        });
        elementProperty.getElement('.secondPassLawer', div => {
            div.classList.remove('hidden')
        });
    });

    Route.pageDynamic();

});