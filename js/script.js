//IFFE START 
$("document").ready(function(){

//HIDE CONTAINER B BY DEFAULT
$(".conB").hide();
$(".sideB").hide();
$(".sideC").hide();
$(".sideD").hide();
$(".sideE").hide();
      
/////////////////////////////////////BUTTONS //////////////////////////////////////////

// BUTTON NEXT FUNCTIONS
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

$("#btn_next4").click(function() {
        $('#ctn_load').show();
        $('#ctn_loadgif').show();
        setTimeout(function(){
            $('#ctn_load').hide();
            $('#ctn_loadgif').hide();
        },4000);
        setTimeout(function() {
        $(".sideD").hide(); 
        $(".sideE").show();
    }, 4000);
 });       

$("#btn_finish").click(function(){
     location.reload();
})

// BUTTON PREVIOUS FUNCTIONS 

$("#btn_prev1").click(function(){
    $(".sideA").show();
    $(".sideB").hide();
});

$("#btn_prev2").click(function(){
    $(".sideB").show();
    $(".sideC").hide();
});

$("#btn_prev3").click(function(){
    $(".sideC").show();
    $(".sideD").hide();
});



















}); // END OF IFFE
