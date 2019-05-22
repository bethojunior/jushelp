class Dialog
{

    static notification(message, title, buttonName)
    {
        return new Promise(resolve => {
            navigator.notification.alert(
                message,
                resolve,
                title,
                buttonName
            );
        })
    }

}