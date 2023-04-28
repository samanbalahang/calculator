$(function(){
    $("#1").click(function(){
        var calculate = $("#calculate").val();
        if(calculate != ""){
            calculate = calculate + $(this).text();
            $("#calculate").val(calculate);     
        }else{
          $("#calculate").val($(this).text());
        }
    });
    $("#2").click(function(){
        var calculate = $("#calculate").val();
        if(calculate != ""){
            calculate = calculate + $(this).text();
            $("#calculate").val(calculate);     
        }else{
          $("#calculate").val($(this).text());
        }
    });
    $("#3").click(function(){
        var calculate = $("#calculate").val();
        if(calculate != ""){
            calculate = calculate + $(this).text();
            $("#calculate").val(calculate);     
        }else{
          $("#calculate").val($(this).text());
        }
    });
    $("#4").click(function(){
        var calculate = $("#calculate").val();
        if(calculate != ""){
            calculate = calculate + $(this).text();
            $("#calculate").val(calculate);     
        }else{
          $("#calculate").val($(this).text());
        }
    });
    $("#5").click(function(){
        var calculate = $("#calculate").val();
        if(calculate != ""){
            calculate = calculate + $(this).text();
            $("#calculate").val(calculate);     
        }else{
          $("#calculate").val($(this).text());
        }
    });
    $("#6").click(function(){
        var calculate = $("#calculate").val();
        if(calculate != ""){
            calculate = calculate + $(this).text();
            $("#calculate").val(calculate);     
        }else{
          $("#calculate").val($(this).text());
        }
    });
    $("#7").click(function(){
        var calculate = $("#calculate").val();
        if(calculate != ""){
            calculate = calculate + $(this).text();
            $("#calculate").val(calculate);     
        }else{
          $("#calculate").val($(this).text());
        }
    });
    $("#8").click(function(){
        var calculate = $("#calculate").val();
        if(calculate != ""){
            calculate = calculate + $(this).text();
            $("#calculate").val(calculate);     
        }else{
          $("#calculate").val($(this).text());
        }
    });
    $("#9").click(function(){
        var calculate = $("#calculate").val();
        if(calculate != ""){
            calculate = calculate + $(this).text();
            $("#calculate").val(calculate);     
        }else{
          $("#calculate").val($(this).text());
        }
    });
    $("#0").click(function(){
        calcziro($(this));
    });
    $(".id-0").click(function(){
        calcziro($(this));
    });
   function calcziro(e){
        var calculate = $("#calculate").val();
        if(calculate != ""){
            calculate = calculate + $(e).text();
            $("#calculate").val(calculate);     
        }
    }
    $("#00").click(function(){
        var calculate = $("#calculate").val();
        if(calculate != ""){
            calculate = calculate + $(this).text();
            $("#calculate").val(calculate);     
        }
    });
    $("#dot").click(function(){
        var calculate = $("#calculate").val();
        if(calculate != ""){
            // var find = calculate.search("1");
            // var text = "Mr. Blue has a blue house 1 . 3"
            // var position = text.search(".");
            // text = "Hello world, welcome 1 . to the universe.";
            // var result = text.indexOf(".");
            // alert(result);
            var position = calculate.indexOf(".");
            if(position == -1) {
                calculate = calculate + $(this).text();
                $("#calculate").val(calculate);    
            } 
        }
    });
    $("#mrc").click(function(){
        
    });
    $("#plus").click(function(){
        calcplus($(this));
    });
    $(".id-plus").click(function(){
        calcplus($(this));
    });
    function calcplus(e){
        var calculate = $("#calculate").val();
        var last = calculate.slice(-1);
        if(calculate != ""){
            if(last != "+" && last != "-" && last != "×" && last != "÷"){
                calculate = calculate + $(e).text();
                $("#calculate").val(calculate);
            }     
        } 
    }

    $("#minus").click(function(){
        calcminus($(this));
    });
    $("id-minus").click(function(){
        calcminus($(this));
    });

    function calcminus(e){
        var calculate = $("#calculate").val();
        var last = calculate.slice(-1);
        if(calculate != ""){
            if(last != "+" && last != "-" && last != "×" && last != "÷"){
                calculate = calculate + $(e).text();
                $("#calculate").val(calculate);
            }     
        }
    }
    
    $("#times").click(function(){
        caltimes();

    });
    $(".id-times").click(function(){
        caltimes();
    });
    function caltimes(){
        var calculate = $("#calculate").val();
        var last = calculate.slice(-1);
        if(calculate != ""){
            if(last != "+" && last != "-" && last != "×" && last != "÷"){
                calculate = calculate +"×";
                $("#calculate").val(calculate);
            }     
        }
    }
    $("#divide").click(function(){
        calcdivide();
    });
    $(".id-divide").click(function(){
        calcdivide();
    });

    function calcdivide(){
        var calculate = $("#calculate").val();
        var last = calculate.slice(-1);
        if(calculate != ""){
            if(last != "+" && last != "-" && last != "×" && last != "÷"){
                calculate = calculate +"÷";
                $("#calculate").val(calculate);
            }     
        }
    }
    $("#square").click(function(){
        var calculate = $("#calculate").val();
        var last = calculate.slice(-1);
        if(calculate == ""){
            $("#calculate").val("√");               
        }
    });
    $("#percentage").click(function(){
        var calculate = $("#calculate").val();
        var last = calculate.slice(-1);
        if(calculate != ""){
                calculate = calculate +"%";
                $("#calculate").val(calculate);
            }     
    });

    // $("#equal").click(function(){
    //     var calculate = $("#calculate").val();
    //     var plus =  calculate.indexOf("+");
    //     var minus = calculate.indexOf("-");
    //     var times = calculate.indexOf("×");
    //     var devid = calculate.indexOf("÷");
    //     var squer = calculate.indexOf("√");
    //     var percentage = calculate.indexOf("%");
    //     var last = calculate.slice(-1);
    //     var rempelast = calculate.substring(0 , calculate.length - 1);

    //     if(times != -1){
    //         const str = calculate;
    //         const index = times;
    //         const replacement = '*';
    //         const replaced =
    //         str.substring(0, index) +
    //         replacement +
    //         str.substring(index + 1);
    //         calculate = replaced; 
    //     }
    //     if(devid != -1){
    //         const str = calculate;
    //         const index = devid;
    //         const replacement = '/';
    //         const replaced =
    //         str.substring(0, index) +
    //         replacement +
    //         str.substring(index + 1);
    //         calculate = replaced; 
    //     }
    //     if(squer == 0){
    //         calculate =  calculate.substring(1);
    //         calculate = Math.sqrt(eval(calculate));
    //     }
    //     if(percentage != -1){                
    //         // if(plus == -1 || minus == -1 || times == -1 || devid == -1){    
    //         //     //  alert("213");  
    //         //     if(last != "%"){
    //         //             // alert("216");
    //         //             var pernum = calculate.substring(0, percentage);
    //         //             var actnum = calculate.substring(percentage + 1);
    //         //             calculate = ((parseInt(actnum)*parseInt(pernum))/100)
    //         //         }
    //         // }
    //         if(plus != -1)    {
    //             var pernum = calculate.substring(0, plus);
    //             var actnum = rempelast.substring(plus + 1);
    //             // alert(rempelast);
    //             // alert(pernum);
    //             alert(actnum);
    //             var first = ((parseInt(actnum)*parseInt(pernum))/100);
    //             calculate = eval(eval(pernum) + eval(first));
    //         }
    //         if(minus != -1)    {
    //             var pernum = calculate.substring(0, minus);
    //             var actnum = rempelast.substring(minus + 1);
    //             var first = ((parseInt(actnum)*parseInt(pernum))/100);
    //             calculate = eval(eval(pernum) - eval(first));

    //         }
    //         if(times != -1)    {
    //             var pernum = calculate.substring(0, times);
    //             var actnum = rempelast.substring(times + 1);
    //             var first = ((parseInt(actnum)*parseInt(pernum))/100);
    //             calculate = eval(pernum * first);
    //         }
    //         if(devid != -1)    {
    //             var pernum = calculate.substring(0, devid);
    //             var actnum = rempelast.substring(devid + 1);
    //             var first = ((parseInt(actnum)*parseInt(pernum))/100);
    //             calculate = eval(pernum / first);
    //         }
            
    //     }
    //     var equal = eval(calculate);
    //     $("#calculate").val(equal);
    // });
    $("#memminus").click(function(){
        
    });
    $("#memplus").click(function(){
        
    });
    $("#whiteArrow").click(function(){
        check();
    });

    $("#on").click(function(){
        $("#calculate").val("");
    });
    $("#onwhite").click(function(){
        $("#calculate").val("");
    });
    $("#c").click(function(){
        $("#calculate").val("");
    });


    $("#check").click(function(){
        check();
    });
    $("#negPos").click(function(){
        calcnegplus();
    });
    $(".id-negPos").click(function(){
        calcnegplus();
    });

    function calcnegplus(){
        var calculate = $("#calculate").val();
        var first = calculate.slice(0,1);
        if(first == ""){
            first = "-";
        }else{
            if(first == "-"){
                calculate = calculate.substring(1);
            }else{
                calculate = "-" + calculate;
            }
        }
        $("#calculate").val(calculate);
    }

    $("#gt").click(function(){
        // $("#orc").toggleClass("col-12 col-6");
        $("#eorc").toggleClass("d-none");
        $("#mathnum").toggleClass("d-lg-block");
        // $("#numpad").toggleClass("col-5 col-10");
        // $("#whitenum").toggleClass("col-1 col-2");
    });

    $("#oddtill").click(function(){
        $("#calculate").val("سری اعداد فرد تا ");
    });
    $("#eventill").click(function(){
        $("#calculate").val("سری اعداد زوج تا ");
    });
    $("#fib").click(function(){
        $("#calculate").val("فیبوناچی تا ");
    });
    $("#execute").click(function(){
        var calculate = $("#calculate").val();
        var position = calculate.indexOf(".");
        var output  = "";
        if(calculate.indexOf("سری اعداد فرد تا") != -1){
            calculate = calculate.substring(16);
            lastindex = eval(calculate);
            lastindex = parseInt(lastindex);
            // alert(lastindex);
            // for(i = 1; lastindex<i ;i++){
            for(i = 1; lastindex >= i ; i = i+2){
               if(output !=""){ 
                output = output  +" -- "+ i; 
               }else{
                output = i; 
               }
            //    alert(i);
            }
            $("#calculate").val(output);
        }
        if(calculate.indexOf("سری اعداد زوج تا") != -1){
            calculate = calculate.substring(16);
            lastindex = eval(calculate);

            lastindex = parseInt(lastindex);
            // alert(lastindex);
            // for(i = 1; lastindex<i ;i++){
            for(i = 0; lastindex >= i ; i = i+2){
               if(output !=""){ 
                output = output  +" -- "+ i; 
               }else{
                output = i; 
               }
            //    alert(i);
            }
            $("#calculate").val(output);
        }
        if(calculate.indexOf("فیبوناچی تا") != -1){
            calculate = calculate.substring(11);
            lastindex = eval(calculate);
            // alert(lastindex);
            lastindex = parseInt(lastindex);
           
            // for(i = 1; lastindex<i ;i++){
            // for(i = 1 , j = 1; lastindex >= i ,lastindex >= j ; i = i + j , j = i + j){
            for(i = 1 , j = 1; lastindex >= i  ; i = i + j , j = i + j){
               if(output !=""){ 
                   if(j <= lastindex){
                        output = output  +" -- "+ i +" -- "+ j; 
                    }else{
                        output = output  +" -- "+ i 
                    }

                // if(i > j){
                //     output = output  +" -- "+ i +" -- "+ j + "--" + i;  
                // }else{
                //     output = output  +" -- "+ i +" -- "+ j; 
                // }
               }else{
                output = i +" -- "+ j; 
               }
            //    alert(i);
            }
            $("#calculate").val(output);
        }
    });


    $("#0").click(function(){
        
    });
    $("#fullsize").click(function (){
        polyfill();
    });
    function polyfill() {
        var interesting = document.getElementById("interesting");

		// Check if this browser support the fullscreen API
		if (typeof document.fullscreenEnabled !== undefined) {

			// Register a click handler for the <div>
			// interesting.addEventListener("click", function() {

				// Toggle fullscreen
				if (document.fullscreenElement) {
					document.exitFullscreen();
				} else {
					document.getElementById("interesting").requestFullscreen();
				}

			// }, false);

		}
    }

    function check() {
        var calculate = $("#calculate").val();
        var rempelast = calculate.substring(0 , calculate.length - 1);
        $("#calculate").val(rempelast);
    }
});

