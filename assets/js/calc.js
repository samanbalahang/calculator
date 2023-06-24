$(function () {
    $(".number").on("click", function () {
        var thisText = $(this).text();
        var calculate = ($("#calculate").val() + thisText).trim();
        $("#calculate").val(calculate);
    });
    $(".ziroes").click(function () {
        if ($("#calculate").val() != "") {
            var thisText = $(this).text();
            var calculate = ($("#calculate").val() + thisText).trim();
            $("#calculate").val(calculate);
        }
    });
    $(".dot").on("click", function () {
        if ($("#calculate").val().indexOf(".") == -1) {
            var thisText = $(this).text();
            var calculate = ($("#calculate").val() + thisText).trim();
            $("#calculate").val(calculate);
        }
    });
    $(".baseMath").on("click", function () {
        if ($("#calculate").val() != "") {
            var calculate = $("#calculate").val();
            var lastChar = calculate.slice(-1);
            var thisText = $(this).text();
            if (thisText == "*") {
                thisText = "×";
            }
            if (thisText == "/") {
                thisText = "÷";
            }
            if (lastChar != "+" && lastChar != "-" && lastChar != "×" && lastChar != "÷" && lastChar != "%") {
                var calculate = ($("#calculate").val() + thisText).trim();
                $("#calculate").val(calculate);
            }
        }
    });
    $("#square").click(function () {
        if ($("#calculate").val() == "") {
            var thisText = "√";
            $("#calculate").val(thisText);

        }
    });
    $(".clear").on("click", function () {
        $("#calculate").val("");
    });
    $(".remLastChar").on("click", function () {
        var calculate = $("#calculate").val();
        var length = calculate.length;
        $("#calculate").val(calculate.substring(0, length - 1));
    });
    $("#gt").click(function () {
        $("#mathnum").toggleClass("d-lg-block d-lg-none")
        $("#eorc").toggleClass("d-none d-lg-block");

    });
    $(".negPos").click(function () {
        var calculate = $("#calculate").val();
        if (calculate.substring(0, 1) == "-") {
            $("#calculate").val(calculate.substring(1));
        } else {
            $("#calculate").val("-" + calculate);
        }
    });
    $("#fullsize").on("click", function () {
        polyfill();
    });

    $("#equal").on("click", function () {
        var calculate = $("#calculate").val();
        calculate = removemath(calculate);
        console.log(calculate);
        if (calculate != "") {
            try {
                calculate = eval(calculate);

            } catch {
                calculate = calculate;
            }
            $("#calculate").val(calculate);
        }
    });
    $("#oddtill").click(function () {
        $("#calculate").val("سری اعداد فرد تا ");
    });
    $("#eventill").click(function () {
        $("#calculate").val("سری اعداد زوج تا ");
    });
    $("#fib").click(function () {
        $("#calculate").val("فیبوناچی تا ");
    });
    $("#execute").click(function () {
        var calculate = $("#calculate").val();
        if (calculate.indexOf("سری اعداد فرد تا") != -1) {
            calculate = calculate.substring(16);
            oddtillnum(calculate);

        }
        if (calculate.indexOf("سری اعداد زوج تا") != -1) {
            calculate = calculate.substring(16);
            eventillnum(calculate)

        }
        if (calculate.indexOf("فیبوناچی تا") != -1) {
            calculate = calculate.substring(11);
            fibo(calculate);

        }
    });



    function removemath(calculate) {
        var plus = calculate.indexOf("+");
        var minus = calculate.indexOf("-");
        var multyply = calculate.indexOf("×");
        var devid = calculate.indexOf("÷");
        var root = calculate.indexOf("√");
        var percentage = calculate.indexOf("%");
        if (multyply != -1) {
            var first = calculate.substring(0, multyply);
            var newmath = "*";
            var last = calculate.substring(multyply + 1);
            calculate = first + newmath + last;
            return calculate;
        }
        if (devid != -1) {
            var first = calculate.substring(0, devid);
            var newmath = "/";
            var last = calculate.substring(devid + 1);
            calculate = first + newmath + last;
            return calculate;
        }
        if (root != -1) {
            calculate = Math.sqrt(eval(calculate.substring(1)));
            return calculate;
        }
        if (percentage != -1) {
            if (plus != -1 || minus != -1 || multyply != -1 || devid != -1) {
                var plusLAstIndexOF = calculate.lastIndexOf("+");
                var minusLAstIndexOF = calculate.lastIndexOf("-");
                var multiplyLAstIndexOF = calculate.lastIndexOf("*");
                var devidLAstIndexOF = calculate.lastIndexOf("/");
                var maxOprator = Math.max(plusLAstIndexOF, minusLAstIndexOF, multiplyLAstIndexOF, devidLAstIndexOF);
                var equition = eval(calculate.substring(0, maxOprator));
                var theOperator = calculate.substring(maxOprator, (maxOprator + 1))
                var percNum = calculate.substring((maxOprator + 1), percentage);
                if (theOperator == "+") {
                    calculate = equition + (equition * eval(percNum) / 100);
                }
                else if (theOperator == "-") {
                    calculate = equition - (equition * eval(percNum) / 100);
                }
                else if (theOperator == "*") {
                    calculate = equition * (equition * eval(percNum) / 100);
                }
                else if (theOperator == "/") {
                    calculate = equition / (equition * eval(percNum) / 100);
                }
            } else {
                equition = calculate.substring(percentage + 1);
                percNum = eval(calculate.substring(0, percentage));
                calculate = (equition * percNum / 100);
            }
            return calculate;
        }
        return calculate;
    }
    function polyfill() {
        var interesting = document.getElementById("interesting");
        if (typeof document.fullscreenEnabled !== undefined) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                interesting.requestFullscreen();
            }
        }
    }
    function oddtillnum(calculate) {
        var output = "";
        lastindex = parseInt(eval(calculate));
        for (i = 1; lastindex >= i; i = i + 2) {
            if (output != "") {
                output = output + " -- " + i;
            } else {
                output = i;
            }
        }
        $("#calculate").val(output);
    }
    function eventillnum(calculate) {
        var output = "";
        lastindex = eval(calculate);
        lastindex = parseInt(lastindex);
        for (i = 0; lastindex >= i; i = i + 2) {
            if (output != "") {
                output = output + " -- " + i;
            } else {
                output = i;
            }
        }
        $("#calculate").val(output);
    }
    function fibo(calculate) {
        var output = "";
        lastindex = parseInt(eval(calculate));
        for (i = 1, j = 1; lastindex >= i; i = i + j, j = i + j) {
            if (output != "") {
                if (j <= lastindex) {
                    output = output + " -- " + i + " -- " + j;
                } else {
                    output = output + " -- " + i
                }
            } else {
                output = i + " -- " + j;
            }
        }
        $("#calculate").val(output);
    }



});