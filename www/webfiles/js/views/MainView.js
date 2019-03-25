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
    actionLincense: function(){
        const js = [];
        const css = ['menu','signup'];
        const views = [
            'menu/menuTitle',
            'lincense/index',
        ];
        layoutBuild(views, js, css);
    },
    actionForgetPassword: function(){
        const js = [
            "utils/preload",
            "libs/materialize.min.js",
            "controllers/CustomerController",
            "controllers/UserController",
            "modulos/login/forgetPassword",

        ];
        const css = ['materialize' ,'forgetPassword' , 'preload'];
        const views = [
            'preload/index',
            'login/forgetPassword',
        ];
        layoutBuild(views, js, css);
    }
};