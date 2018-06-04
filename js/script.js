//IFFE START 
$("document").ready(function(){


    //VARIABLES
    var travelDistance = 0;
    var travelDays= 0;
    var pickupdate = 0;
    var returndate = 0;
    var days= 0;
    var fuelCost = 0;
    var rentCost = 0;
    var totalCost = 0;
    var alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var number = ["0","1","2","3","4","5","6","7","8","9"];
    var randAlpha1 = alpha[Math.floor(Math.random() * alpha.length)];
    var randAlpha2 = alpha[Math.floor(Math.random() * alpha.length)];
    var randNum1 = number[Math.floor(Math.random() * number.length)];
    var randNum2 = number[Math.floor(Math.random() * number.length)];
    var randNum3 = number[Math.floor(Math.random() * number.length)];
    var randNum4 = number[Math.floor(Math.random() * number.length)];

    //INVOKE FUNCTIONS
      $(".btn_selectvehicle").click(function() {
        selectVehicleFunction();
        motorbikeFunction();
        smallcarFunction();
        largecarFunction();
        motorhomeFunction();
        });


    //HIDE CONTAINER B BY DEFAULT
    $(".conB").hide();
    $(".sideB").hide();
    $(".sideC").hide();
    $(".sideD").hide();
    $(".sideE").hide();
      
///////////////////////////////////// BUTTONS //////////////////////////////////////////

    // NEXT BUTTON FUNCTIONS
    $( "#btn_start" ).click(function() {
        $( ".conA" ).hide();
        $(".conB").fadeIn();
        $("#map").fadeIn();
        map.resize();
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

    // PREVIOUS BUTTON FUNCTIONS 

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



/////////////////////////////////////////////////////////////

            // MAP SIDE BAR FUNCTIONS  

/////////////////////////////////////////////////////////////

//SIDE A - DIRECTIONS

    //ENABLE NEXT BUTTON WHEN TWO POINTS ARE PLACED ON MAP 
     $('#btn_next1').prop('disabled', true)

        map.addControl(directions, 'top-right');

          directions.on('route', function(directions){

            travelDistance =directions.route['0'].distance / 1000;
            travelDays = directions.route["0"].duration / 86400;

            $(".h2_result_distance").text((Math.floor(travelDistance))+ " km");
            if(directions.route["0"].distance > 0){          
            $('#btn_next1').prop('disabled', false);

              }

        });  


//SIDE B - INPUT TRAVEL DATES 

    function DaysFunction(){
    pickupdate = new Date(document.getElementById('pickupdate').value);
    returndate = new Date(document.getElementById('dropoffdate').value);
    days = parseInt((returndate - pickupdate) / (24 * 3600 * 1000));

   //WRITES IN DOM
   $(".h2_result_days").text((Math.floor(days))+ " Days");
    }

    //ERROR VALIDATION
    $('#btn_next2').prop('disabled', true);
        $("#ctn_error").hide();

     $("#dropoffdate").change(function(){
        DaysFunction(); 
         if((days >= 1)&&(days<= 15)){

            $('#btn_next2').prop('disabled', false);
            $("#ctn_error").fadeOut(200);

         }else {
            $('#btn_next2').prop('disabled', true);
            $("#ctn_error").show();
         }
    });

//SIDE C - NUMBER OF PASSSENGERS

        $('#btn_next3').prop('disabled', true);

        $(".plus").click(function(){
            $('#btn_next3').prop('disabled', false);
        });

//SIDE D - SELECT VEHICLE 

            $('.btn_next4').prop('disabled', true);

        function selectVehicleFunction(){
            var vehicleChange = document.getElementById("number_select");
            console.log(typeof vehicleChange.value);

            switch(vehicleChange.value){

                case "1":
                $(".ctn_select_motorbike").show();
                $(".ctn_select_smallcar").show();
                $(".ctn_select_largecar").show();
                $(".ctn_select_motorhome").hide();

                    break;

                case "2":
                $(".ctn_select_motorbike").hide();
                $(".ctn_select_smallcar").show();
                $(".ctn_select_largecar").show();
                $(".ctn_select_motorhome").show();

                    break;

                case "3":
                $(".ctn_select_motorbike").hide();
                $(".ctn_select_smallcar").hide();
                $(".ctn_select_largecar").show();
                $(".ctn_select_motorhome").show();

                break;

                case "4":
                $(".ctn_select_motorbike").hide();
                $(".ctn_select_smallcar").hide();
                $(".ctn_select_largecar").show();
                $(".ctn_select_motorhome").show();

                break;

                case "5":
                $(".ctn_select_motorbike").hide();
                $(".ctn_select_smallcar").hide();
                $(".ctn_select_largecar").show();
                $(".ctn_select_motorhome").show();

                break;

                case "6":
                $(".ctn_select_motorbike").hide();
                $(".ctn_select_smallcar").hide();
                $(".ctn_select_largecar").hide();
                $(".ctn_select_motorhome").show();

                }

            }

    //HIDES VEHICLES DEPENDING ON USER DAYS INPUT 

                function motorbikeFunction(){
                 if(days>5){
                    $(".ctn_select_motorbike").hide();
                    }
                }

                function smallcarFunction(){
                if(days>10){
                          $(".ctn_select_smallcar").hide();
                    }
                }

                function largecarFunction(){
                if(days<=3){
                    $(".ctn_select_largecar").hide();
                        }else if (days>10){
                            $(".ctn_select_largecar").hide();
                        }
                }

                function motorhomeFunction(){
                if(days<2){
                    $(".ctn_select_motorhome").hide();
                        }
                }


        $(".select_motorbike").click(function(){

                $(".selectedvehicle").attr("src",data[0].image);
                $(".selectedvehiclename").text(data[0].vehicleName);
                $(".h2_result_dayprice").text(data[0].dayPrice);

                    fuelCost = ((Math.floor((data[0].fuelMulti * (travelDistance/100)) * 2.14)));
                    $(".h2_result_fuelcost").text("$" + fuelCost);
                    rentCost=((Math.floor(days * data[0].rentMulti)));
                    $(".h2_result_totalrentcost").text("$" + rentCost);
                    totalCost=(fuelCost + rentCost);
                    $(".h2_result_totalcost").text("$" + totalCost);

                    $('.btn_next4').prop('disabled', false);

                $.modal.close();
        });

        $(".select_smallcar").click(function () {

                $(".selectedvehicle").attr("src",data[1].image);
                $(".selectedvehiclename").text(data[1].vehicleName);
                $(".h2_result_dayprice").text(data[1].dayPrice);

                    fuelCost = ((Math.floor((data[1].fuelMulti * (travelDistance/100)) * 2.14)));
                    $(".h2_result_fuelcost").text("$" + fuelCost);
                    rentCost=((Math.floor(days * data[1].rentMulti)));
                    $(".h2_result_totalrentcost").text("$" + rentCost);
                    totalCost=(fuelCost + rentCost);
                    $(".h2_result_totalcost").text("$" + totalCost);

                    $('.btn_next4').prop('disabled', false);

                $.modal.close();
        });

        $(".select_largecar").click(function () {

                $(".selectedvehicle").attr("src",data[2].image);
                $(".selectedvehiclename").text(data[2].vehicleName);
                $(".h2_result_dayprice").text(data[2].dayPrice);

                    fuelCost = ((Math.floor((data[2].fuelMulti * (travelDistance/100)) * 2.14)));
                    $(".h2_result_fuelcost").text("$" + fuelCost);
                    rentCost=((Math.floor(days * data[2].rentMulti)));
                    $(".h2_result_totalrentcost").text("$" + rentCost);
                    totalCost=(fuelCost + rentCost);
                    $(".h2_result_totalcost").text("$" + totalCost);

                    $('.btn_next4').prop('disabled', false);

                $.modal.close();
        });

            //MOTORHOME

        $(".select_motorhome").click(function () {

                $(".selectedvehicle").attr("src",data[3].image);
                $(".selectedvehiclename").text(data[3].vehicleName);
                $(".h2_result_dayprice").text(data[3].dayPrice);

                    fuelCost = ((Math.floor((data[3].fuelMulti * (travelDistance/100)) * 2.14)));
                    $(".h2_result_fuelcost").text("$" + fuelCost);
                    rentCost=((Math.floor(days * data[3].rentMulti)));
                    $(".h2_result_totalrentcost").text("$" + rentCost);
                    totalCost=(fuelCost + rentCost);
                    $(".h2_result_totalcost").text("$" + totalCost);

                    $('.btn_next4').prop('disabled', false);

                $.modal.close();
        });


//REFERENCE NUMBER GENERATOR - WORKING

    function refFunction(){
      document.getElementById('h2_alpha1').innerHTML = randAlpha1;
      document.getElementById('h2_alpha2').innerHTML = randAlpha2;
      document.getElementById('h2_number1').innerHTML = randNum1;
      document.getElementById('h2_number2').innerHTML = randNum2;
      document.getElementById('h2_number3').innerHTML = randNum3;
      document.getElementById('h2_number4').innerHTML = randNum4;

    }
    //INVOKES FUNCTION
    refFunction();






















}); // END OF IFFE
