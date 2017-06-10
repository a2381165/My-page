window.onload = function() {
	var oMan = document.getElementById("man");
	var oWoan = document.getElementById("woman");
	var oHigh = document.getElementById("high");
	var oWeight = document.getElementById("weight");
	var oAge = document.getElementById("age");
	var oCalculations = document.getElementById("calculations");
	var oReset = document.getElementById("reset");
	var oH1 = document.getElementById("h1");
	var oH2 = document.getElementById("h2");
	var oH3 = document.getElementById("h3");
	var oH4 = document.getElementById("h4");
	var oH5 = document.getElementById("h5");
	var oCalories = document.getElementById("calories");
	var oDay = document.getElementById("daycalories");
	oCalculations.onclick = function() {
		var bmr = 0;
		console.log(oMan.checked);
		if(oMan.checked==true) {
			bmr = 66 + parseInt(13.7*oWeight.value+5 * oHigh.value-6.5 *oAge.value);
			oCalories.innerHTML="BMR : &nbsp;"+bmr;
			console.log(bmr);
			if(oH1.checked==true) {
				 oDay.innerHTML = "一日所需能量：&nbsp;" + (parseInt(bmr * 1.2)) + "&nbsp;千卡Kcal";
			} else if(oH2.checked==true) {
				 oDay.innerHTML = "一日所需能量：&nbsp;" + (parseInt(bmr * 1.375)) + "&nbsp;千卡Kcal";
			} else if(oH3.checked==true) {
				 oDay.innerHTML = "一日所需能量：&nbsp;" + (parseInt(bmr * 1.55)) + "&nbsp;千卡Kcal";
			} else if(oH4.checked==true) {
				 oDay.innerHTML = "一日所需能量：&nbsp;" + (parseInt(bmr * 1.725)) + "&nbsp;千卡Kcal";
			} else if(oH5.checked==true) {
				 oDay.innerHTML = "一日所需能量：&nbsp;" + (parseInt(bmr * 1.9)) + "&nbsp;千卡Kcal";
			}
		} 
		else if(oWoan.checked==true) {
			bmr = 655 + parseInt(9.6 *oWeight.value+ 1.8 * oHigh.value-4.7 * oAge.value);
			oCalories.innerHTML="BMR:"+bmr;
			if(oH1.checked==true) {
				 oDay.innerHTML = "一日所需能量：&nbsp;" + (parseInt(bmr * 1.2)) + "&nbsp;千卡Kcal";
			} else if(oH2.checked==true) {
				 oDay.innerHTML = "一日所需能量：&nbsp;" + (parseInt(bmr * 1.375)) + "&nbsp;千卡Kcal";
			} else if(oH3.checked==true) {
				 oDay.innerHTML = "一日所需能量：&nbsp;" + (parseInt(bmr * 1.55)) + "&nbsp;千卡Kcal";
			} else if(oH4.checked==true) {
				 oDay.innerHTML = "一日所需能量：&nbsp;" + (parseInt(bmr * 1.725)) + "&nbsp;千卡Kcal";
			} else if(oH5.checked==true) {
				 oDay.innerHTML = "一日所需能量：&nbsp;" + (parseInt(bmr * 1.9)) + "&nbsp;千卡Kcal";
			}
		}
	}
	oReset.onclick = function() {
		oHigh.value = null;
		oWeight.value = null;
		oAge.value = null;
	}

}