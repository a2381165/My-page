window.onload = function() {
   	var oSex = document.getElementById("sex");
   	var oSex = document.getElementById("sex");
   	var oAge = document.getElementById("age");
   	var oRuning = document.getElementById("running");
   	var oHours = document.getElementById("slt_hours");
   	var oMinute = document.getElementById("slt_minutes");
   	var oSecond = document.getElementById("slt_seconds");
   	var oCalculations = document.getElementById("calculations");
   	var oReset = document.getElementById("reset");
   	oCalculations.onclick = function() {
   		var time = 0;
   		time = parseInt((oHours.value*60)+(oMinute.value)+(oSecond.value/60));
   		console.log(time);
   		if() {

   		} else if() {

   		}
   	}
   	oReset.onclick = function() {
   		oAge.value = null;
   	}
   	
}