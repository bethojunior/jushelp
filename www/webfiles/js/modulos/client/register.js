viewController.setObserver("Signup", function () {
    $('select').material_select();
    let dataLawer = {};
    dataLawer.user = {};
    dataLawer.lawyer = {}
    dataLawer.address = {};
    dataLawer.specialities = [];
    let elementProperty = new ElementProperty();
    Mask.setMaskPhone('#firstContact');
    Mask.setMaskPhone('#secondContact');
    Mask.setMaskCpf('#cpfLawer');
    
    CustomerController.getUf().then(response => {
        elementProperty.getElement('#uf', options => {
            let txt = '';
            txt += response.response.map(that => {
                return `
                    <option value='${that.id}'>${that.slug}</option>
                `;
            }).join('');
            options.innerHTML = txt;
            $('select').material_select();
        });
    });


    elementProperty.addEventInElement('#backLogin','onclick',function(){
        Route.redirectDynamic('Main','Login')
    });

    elementProperty.addEventInElement('.backLogin','onclick',function(){

        elementProperty.getElement('.normalUser', div => {
            if(div.classList.contains('show')){
                div.classList.remove('show');
            }
        });

        elementProperty.getElement('.chooseUser', pass => {
            pass.classList.remove('hidden');
        });
    });

    elementProperty.addEventInElement('#imgUser','onclick',function(){
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

    function secondPass(isLawer){
        elementProperty.getElement('.chooseUser',pass => {
            pass.classList.add('hidden');
        });

        if(isLawer){
            elementProperty.getElement('.userLawer',div => {
                div.classList.add('show');
            });
            return;
        }
        elementProperty.getElement('.normalUser',div => {
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


        dataLawer.user.name           = document.getElementById('nameLawer').value;
        dataLawer.user.contact_phone  = document.getElementById('firstContact').value;
        dataLawer.user.email          = document.getElementById('emailLawer').value;
        dataLawer.lawyer.oab_number   = document.getElementById('oab-user').value;
        dataLawer.lawyer.state_id     = document.getElementById('uf').value;
        dataLawer.address.state_id    = document.getElementById('uf').value;
        dataLawer.lawyer.oab_estate   = document.getElementById('uf').value;
        dataLawer.user.password       = document.getElementById('password-lawer').value
        let password                  = document.getElementById('password-lawer-again').value

        if(password !== dataLawer.user.password){
            Materialize.toast('As senhas são diferents',2000);
            return;
        }
        if(dataLawer.user.name === '' || dataLawer.user.contact_phone  === '' || dataLawer.user.email === '' || dataLawer.lawyer.oab === '' || dataLawer.lawyer.uf === ''){
            Materialize.toast('Preencha todos os campos' , 1500);
            return;
        }
        secondPassLawer();

    });

    function secondPassLawer(){
        CustomerController.getCities(dataLawer.address.state_id).then(response => {
            let data = response.response;
            elementProperty.getElement('#mount-cities', options => {
                let txt = '';
                txt += data.map(that => {
                    return `
                        <option value='${that.id}'>${that.slug}</option>
                    `;
                }).join('');
                options.innerHTML = txt;
                $('select').material_select();
            });
        });
        
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

        dataLawer.user.cpf = document.getElementById('cpfLawer').value;
        dataLawer.user.rg = document.getElementById('rgLawer').value;
        dataLawer.address.cep = document.getElementById('cepLawer').value;
        dataLawer.address.number = document.getElementById('numberAddressLawer').value;
        dataLawer.address.street = document.getElementById('addressLawer').value;
        dataLawer.address.neighborhood = document.getElementById('neighborhoodLawer').value;
        dataLawer.address.city_id = document.getElementById('mount-cities').value;

        if(dataLawer.user.cpf === '' || dataLawer.user.rg === ''|| dataLawer.address.cep === '' || dataLawer.address.number === '' || dataLawer.address.street === '' || dataLawer.address.neighborhood  === ''|| dataLawer.address.city_id === ''){
            Materialize.toast('Preencha todos os campos',800);
            return;
        }

        elementProperty.getElement('.thirdPassLawer', div => {
            div.classList.remove('hidden')
        });
        elementProperty.getElement('.secondPassLawer', div => {
            div.classList.add('hidden')
        });
    });

    elementProperty.addEventInElement('.backSecondLawer','onclick',function(){

        //checa dados dos campos

        elementProperty.getElement('.thirdPassLawer', div => {
            div.classList.add('hidden')
        });
        elementProperty.getElement('.secondPassLawer', div => {
            div.classList.remove('hidden')
        });
    });

    elementProperty.addEventInElement('#passFourthPass','onclick',function(){
        dataLawer.specialities.push(1);
        // preload(true);
        CustomerController.insert(dataLawer).then(response => {
            if(response.status){
                swal('Usuário cadastrado com sucesso','','success');
                return;
            }
            swal('Erro ao cadastrar usuário',response.message,'info');
        })

        // //checa dados dos campos
        // elementProperty.getElement('.thirdPassLawer', div => {
        //     div.classList.add('hidden')
        // });
        // elementProperty.getElement('.fourthPass', div => {
        //     div.classList.remove('hidden')
        // });
    });

    elementProperty.addEventInElement('.backThirdLawer','onclick',function(){
        elementProperty.getElement('.fourthPass', div => {
            div.classList.add('hidden')
        });
        elementProperty.getElement('.thirdPassLawer', div => {
            div.classList.remove('hidden')
        });
    });

    elementProperty.addEventInElement('#secondPassNormalUser','onclick',function(){

        elementProperty.getElement('.firstPassUser', div => {
            div.classList.add('hidden');
        });

        elementProperty.getElement('.secondPassUser', div => {
            div.classList.remove('hidden');
        });

    });

    elementProperty.addEventInElement('.backFirstPass','onclick',function(){
        elementProperty.getElement('.firstPassUser', div => {
            div.classList.remove('hidden');
        });

        elementProperty.getElement('.secondPassUser', div => {
            div.classList.add('hidden');
        });
    });


    elementProperty.addEventInElement('#finallyUser','onclick',function(){
        preload(true);
        setTimeout(()=>{
            preload(false)
        },10000)
    });

    Route.pageDynamic();
});