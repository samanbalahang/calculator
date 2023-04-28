$(function(){
    function calcequal(){
        var calculate = $("#calculate").val();
        var plus =  calculate.indexOf("+");
        var minus = calculate.indexOf("-");
        var times = calculate.indexOf("×");
        var devid = calculate.indexOf("÷");
        var squer = calculate.indexOf("√");
        var percentage = calculate.indexOf("%");
        var last = calculate.slice(-1);
        if(times != -1){
            const str = calculate;
            const index = times;
            const replacement = '*';
            const replaced =
            str.substring(0, index) +
            replacement +
            str.substring(index + 1);
            calculate = replaced; 
        }
        if(devid != -1){
            const str = calculate;
            const index = devid;
            const replacement = '/';
            const replaced =
            str.substring(0, index) +
            replacement +
            str.substring(index + 1);
            calculate = replaced; 
        }
        
        if(squer == 0){
            calculate =  calculate.substring(1);
            calculate = Math.sqrt(eval(calculate));
        }
        if(percentage != -1){ 
            if(plus != -1 || minus != -1 || times != -1 || devid != -1){
                var plusLAstIndexOF = calculate.lastIndexOf("+");
                var minusLAstIndexOF = calculate.lastIndexOf("-");
                var multiplyLAstIndexOF = calculate.lastIndexOf("*");
                var devidLAstIndexOF = calculate.lastIndexOf("/");
                var maxOprator = Math.max(plusLAstIndexOF,minusLAstIndexOF,multiplyLAstIndexOF,devidLAstIndexOF);
                var equition = eval(calculate.substring(0,maxOprator));
                var theOperator = calculate.substring(maxOprator,(maxOprator+1))
                var percNum = calculate.substring((maxOprator+1),percentage);
                if(theOperator == "+"){
                    calculate = equition + (equition * eval(percNum) / 100);
                }
                else if(theOperator == "-")
                {
                    calculate = equition - (equition * eval(percNum) / 100);
                }
                else if(theOperator == "*")
                {
                    calculate = equition * (equition * eval(percNum) / 100);
                }
                else if(theOperator == "/")
                {
                    calculate = equition / (equition * eval(percNum) / 100);
                }
            }else{
                equition = calculate.substring(percentage+1);
                percNum = eval(calculate.substring(0,percentage));
                calculate = (equition * percNum / 100);
            }
            
        }
        var equal = eval(calculate);
         $("#calculate").val(equal);
    }
    $("#equal").click(function(){
        calcequal();
    });
    $(".id-equal").click(function(){
        calcequal();
    });
});