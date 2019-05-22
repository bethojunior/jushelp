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

elementProperty.addEventInElement('#getOutApp','onclick',function(){
    Materialize.toast("Até mais Dr Regnobertho", 1000);
    setTimeout(()=>{
        Route.redirectDynamic('Main','Login')
    },1050);

});

function closedNav() {
    $('.button-collapse').sideNav('hide');
}