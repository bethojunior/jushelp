viewController.setObserver("profile", function () {

    let dataUser = Session.get('user');
    let lawer = dataUser.lawyer;

    document.getElementById('name-profile-user').value = dataUser.name
    document.getElementById('email-profile-user').value = dataUser.email;
    document.getElementById('oab-profile-user').value = lawer.oab_number;

    elementProperty.addEventInElement('#changeImageProfile','onclick',function(){
        preload(true);
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.FILE_URI });

        function onSuccess(imageURI) {
            preload(false);
            var image = document.getElementById('changeImageProfile');
            image.src = imageURI;
            // enviar imagem
        }

        function onFail(message) {
            preload(false)
            //criar log ao dar erro
        }
    });
});