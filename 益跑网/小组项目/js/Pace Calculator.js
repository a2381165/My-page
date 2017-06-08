window.onload=function(){
var oDistance=document.getElementById("distance");
var oHour=document.getElementById("hour");
var oMin=document.getElementById("min");
var oSecond=document.getElementById("second");
var oMin1=document.getElementById("min1");
var oSpeed=document.getElementById("speed");
var oCaculate=document.getElementById("caculate");
var oRepeat=document.getElementById("repeat");
	oRepeat.onclick=function(){
		oDistance.value=0;
		oHour.value=0;
		oMin.value=0;
		oSecond.value=0;
		oMin1.value=0;
		oSpeed.value=0;
	}
//while(oDistance==num){
	oCaculate.onclick=function(){
		var distance = parseInt(oDistance.value);
		console.log(distance);
		var time = parseInt(3600*oHour.value)+parseInt(60*oMin.value)+parseInt(oSecond.value);
		console.log(time);
		var speed = parseInt(60*oMin1.value)+parseInt(oSpeed.value) ;
		console.log(speed);
		
		if (distance==0 && time!=0 && speed!==0 ) {
			console.log("a");
			oDistance.value=(time/speed).toFixed(1);
		} else if(time==0&& distance!=0 && speed!==0 ){
			console.log("b");
			oHour.value=parseInt(distance*speed/3600);
			if(oHour.value<1){
			oMin.value=parseInt(distance*spee/60);	
		}
			if(oHour.value>=1){
			oMin.value=parseInt(distance*speed%60);
		}
			oSecond.value=parseInt(distance*speed%60);
		} else if(speed==0&& time!=0 && distance!==0 ){
			console.log("c");
			oMin1.value=parseInt(time/distance/60);
			oSpeed.value=parseInt(time/distance%60)
		} else {
			console.log("d");
			oDistance.value=(time/speed).toFixed(1);
		}
	
//	var distance=(3600*oHour.value+60*oMin.value-(-oSecond.value))/(60*oMin1.value-(-oSpeed.value));
//	oDistance.value=distance.toFixed(1);
//	console.log(oHour.value);
//	console.log(oMin.value);
//	console.log(oSecond.value);
//	console.log(60*oMin1.value-(-oSpeed.value))
//	console.log(oDistance.value);
//	}
}
//while(oMin.value==null&&oHour.value==null&&oSecond.value==null){
//oCaculate.onclick=function(){	
//	var second=oDistance.value*(oMin1.value*60-(-oSpeed.value));
//	oHour.value=parseInt(second/3600);
//	if(oHour.value>0){
//		oMin.value=0;
//	} 
//	if(oHour.value<=0){
//		oMin.value=parseInt(second/60);
//	}
//	oSecond.value=second%60;
//	console.log(oHour.value);
//	console.log(oMin.value);
//	console.log(oMin1.value);
//	console.log(oSpeed);
//	console.log(oSecond.value);
//	console.log(distance);
//	}
////}
}