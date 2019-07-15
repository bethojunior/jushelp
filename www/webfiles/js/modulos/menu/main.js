let elementProperty = new ElementProperty();
let user = Session.get('user');
$(".button-collapse").sideNav();

document.getElementById('name-user-logged').innerHTML = user.name;
document.getElementById('email-user-logged').innerHTML = user.email;

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
    Materialize.toast("Até mais", 1000);
    setTimeout(()=>{
        Route.redirectDynamic('Main','Login');
        closedNav();
    },1050);

});

function closedNav() {
    $('.button-collapse').sideNav('hide');
}