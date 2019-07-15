ManagerView.HomeView = {
    actionIndex: function () {
        const js = [
            "libs/materialize",
            "utils/Handle",
            "utils/preload",
            "controllers/CustomerController",
            "modulos/home/init"
        ];
        const views = ['preload/index','home/init'];
        const css = ["home/init","materialize"];

        viewController.nameView = "login";

        layoutBuild(views, js, css);
    }
};