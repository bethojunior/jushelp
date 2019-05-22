let elementProperty = new ElementProperty();
$(".button-collapse").sideNav();

elementProperty.addEventInElement('#openProfile','onclick',function(){
    Route.redirectDynamic('Main','Profile')
    closedNav();
});
elementProperty.addEventInElement('#openHome','onclick',function(){
    Route.redirectDynamic('Main','Index')
    closedNav();
});
elementProperty.addEventInElement('#openConfig','onclick',function(){
    Route.redirectDynamic('Main','Config')
    closedNav();
});


function closedNav() {
    $('.button-collapse').sideNav('hide');
}