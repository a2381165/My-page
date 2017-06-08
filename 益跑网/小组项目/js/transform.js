window.onload = function() {
	var oMile1 = document.getElementById("mile1");
	var oFoot1 = document.getElementById("foot1");
	var oMile2 = document.getElementById("mile2");
	var oFoot2 = document.getElementById("foot2");
	var oMile3 = document.getElementById("mile3");
	var oFoot3 = document.getElementById("foot3");
	var oMile4 = document.getElementById("mile4");
	var oFoot4 = document.getElementById("foot4");
	var oMile5 = document.getElementById("mile5");
	var oFoot5 = document.getElementById("foot5");
	var oMile6 = document.getElementById("mile6");
	var oFoot6 = document.getElementById("foot6");
	var oCalculations1 = document.getElementById("calculations1");
	var oReset1 = document.getElementById("reset1");
	var oCalculations2 = document.getElementById("calculations2");
	var oReset2 = document.getElementById("reset2");
	var oCalculations3 = document.getElementById("calculations3");
	var oReset3 = document.getElementById("reset3");
	var oCalculations4 = document.getElementById("calculations4");
	var oReset4 = document.getElementById("reset4");
	var oCalculations5 = document.getElementById("calculations5");
	var oReset5 = document.getElementById("reset5");
	var oCalculations6 = document.getElementById("calculations6");
	var oReset6 = document.getElementById("reset6");
	oCalculations1.onclick=function(){
		if (oMile1.value=="" && oFoot1.value!="") {
			oMile1.value=(parseFloat(oFoot1.value)/1.61).toFixed(2);
		} else if(oMile1.value!=""){
			oFoot1.value=(parseFloat(oMile1.value)*1.61).toFixed(2);
		}
	}
	oReset1.onclick=function(){
		oMile1.value=null;
		oFoot1.value=null;
	}
	oCalculations2.onclick=function(){
		if (oMile2.value=="" && oFoot2.value!="") {
			oMile2.value=(parseFloat(oFoot2.value)/2.54).toFixed(2);
		} else if(oMile2.value!=""){
			oFoot2.value=(parseFloat(oMile2.value)*2.54).toFixed(2);
		}
	}
	oReset2.onclick=function(){
		oMile2.value=null;
		oFoot2.value=null;
	}
	oCalculations3.onclick=function(){
		if (oMile3.value=="" && oFoot3.value!="") {
			oMile3.value=(parseFloat(oFoot3.value)/30.48).toFixed(2);
		} else if(oMile3.value!=""){
			oFoot3.value=(parseFloat(oMile3.value)*30.48).toFixed(2);
		}
	}
	oReset3.onclick=function(){
		oMile3.value=null;
		oFoot3.value=null;
	}
	oCalculations4.onclick=function(){
		if (oMile4.value=="" && oFoot4.value!="") {
			oMile4.value=(parseFloat(oFoot4.value)/0.45).toFixed(2);
		} else if(oMile4.value!=""){
			oFoot4.value=(parseFloat(oMile4.value)*0.45).toFixed(2);
		}
	}
	oReset4.onclick=function(){
		oMile4.value=null;
		oFoot4.value=null;
	}
	oCalculations5.onclick=function(){
		if (oMile5.value=="" && oFoot5.value!="") {
			oMile5.value=(parseFloat(oFoot5.value)/28.35).toFixed(2);
		} else if(oMile5.value!=""){
			oFoot5.value=(parseFloat(oMile5.value)*28.35).toFixed(2);
		}
	}
	oReset5.onclick=function(){
		oMile5.value=null;
		oFoot5.value=null;
	}
	oCalculations6.onclick=function(){
		if (oMile6.value=="" && oFoot6.value!="") {
			oMile6.value=(parseFloat(oFoot6.value)/3.79).toFixed(2);
		} else if(oMile6.value!=""){
			oFoot6.value=(parseFloat(oMile6.value)*3.79).toFixed(2);
		}
	}
	oReset6.onclick=function(){
		oMile6.value=null;
		oFoot6.value=null;
	}
}