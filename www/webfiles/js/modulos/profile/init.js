viewController.setObserver("profile", function () {
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