ManagerView.MainView = {
    actionLogin: function () {
        const js = [
            "libs/materialize",
            "utils/Handle",
            "utils/preload",
            "controllers/CustomerController",
            "modulos/login/login"
        ];
        const views = ['preload/index','login/index'];
        const css = ["login","materialize"];

        viewController.nameView = "login";

        layoutBuild(views, js, css);
    },
    actionIndex: function () {

        const js = [
            "libs/materialize",
            "utils/Handle",
            "utils/preload",
            "controllers/CustomerController",
            "modulos/home/init",
            "modulos/menu/main",
        ];
        const views = ['preload/index','menu/main','home/init'];
        const css = ["home/init","menu/main","materialize"];

        viewController.nameView = "index";

        layoutBuild(views, js, css);
    },
    actionConfig: function () {

        const js = [
            "libs/materialize",
            "utils/Handle",
            "utils/preload",
            "controllers/CustomerController",
            "modulos/home/init",
            "modulos/menu/main",
            "modulos/config/init",
        ];
        const views = ['preload/index','menu/main','config/init'];
        const css = ["config/init","menu/main","materialize"];

        viewController.nameView = "config";

        layoutBuild(views, js, css);
    },
    actionProfile: function () {
        const js = [
            "libs/materialize",
            "utils/Handle",
            "utils/preload",
            "controllers/CustomerController",
            "modulos/init/init",
            "modulos/menu/main",
            "modulos/profile/init"
        ];
        const views = ['preload/index','menu/main','profile/init'];
        const css = ["profile/init","menu/main","materialize"];

        viewController.nameView = "profile";

        layoutBuild(views, js, css);
    },
    actionSignup: function(){
        const js = [
            "libs/materialize",
            'controllers/CustomerController',
            'modulos/client/register',
            'utils/validate'
        ];
        const css = [
            'materialize',
            'client/signup',
            'modal/modalCode'

        ];
        const views = [
            'preload/index',
            'client/register',
        ];

        viewController.nameView = "signup";

        layoutBuild(views, js, css);
    },
};