function notificationInBackground(title,text) {
    cordova.plugins.backgroundMode.configure({
        title: title,
        text: text,
        resume: true,
        silent: false
    });
}

function hiddenNotificationInBackground(){
    cordova.plugins.backgroundMode.configure({
        silent: true
    });
}