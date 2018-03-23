//IFFE START 
$("document").ready(function(){

//HIDE CONTAINER B BY DEFAULT
$(".conB").hide();
$(".sideB").hide();
$(".sideC").hide();
$(".sideD").hide();
$(".sideE").hide();
      
/////////////////////////////////////////////// BUTTON FUNCTIONS
$( "#btn_start" ).click(function() {
    $( ".conA" ).hide();
    $(".conB").fadeIn();
    $("#map").fadeIn();
    $(".sidebar").show();
});

$("#btn_next1").click(function(){
    $(".sideA").hide();
    $(".sideB").show();
});

$("#btn_next2").click(function(){
    $(".sideB").hide();
    $(".sideC").show();
});

$("#btn_next3").click(function(){
    $(".sideC").hide();
    $(".sideD").show();
});

$("#btn_next4").click(function(){
    $(".sideD").hide();
    $(".sideE").show();
});

$("#btn_finish").click(function(){
     location.reload();
})

/////////////////////////////////////////////// BUTTON FUNCTIONS

























}); // END OF IFFE
