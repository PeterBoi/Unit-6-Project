$(".water-falls").hide();
$(".taco-stand").hide();
$(".jumping-waterFalls").hide();
$(".eating-tacos").hide();
$(".choice-Micos").hide();
$(".choice-Tacos").hide();
$(".final_waterFalls").hide();
$(".final_tacoStand").hide();
$(".ending").hide();
// when the water fall option is chosen 
$(".waterFall-button").click(function() {
    $(".choice").hide();
    $(".intro").hide();
    $(".tacoStand-button").hide();
    $(".waterFall-button").hide();
    $(".water-falls").show();
    $(".choice-Micos").show();
    $(".jumping-waterFalls").show();
});
// to end the water fall journey
$(".jumping-waterFalls").dblclick(function() {
    $(".water-falls").hide();
    $(".choice-Micos").hide();
    $(".jumping-waterFalls").hide();
    $(".ending").show();
    $(".final_waterFalls").show();
});
// when the taco stand option is chosen
$(".tacoStand-button").click(function() {
    $(".choice").hide();
    $(".intro").hide();
    $(".tacoStand-button").hide();
    $(".waterFall-button").hide();
    $(".taco-stand").show();
    $(".choice-Tacos").show();
    $(".eating-tacos").show();
});
// to end the taco stand journey
$(".eating-tacos").dblclick(function() {
    $(".taco-stand").hide();
    $(".choice-Tacos").hide();
    $(".eating-tacos").hide();
    $(".ending").show();
    $(".final_tacoStand").show();
});