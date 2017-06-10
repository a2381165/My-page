window.onload=function(){
var oMin2=document.getElementById("min2");
var oSecond1=document.getElementById("second1");
var oKm=document.getElementById("km");
var oMeter=document.getElementById("meter");
var oCaculate=document.getElementById("caculate");
var oRepeat=document.getElementById("repeat");
	oRepeat.onclick=function(){
		oMin2.value=0;
		oSecond1.value=0;
		oKm.value=0;
		oMeter.value=0;
	}
//while(oDistance==num){
	oCaculate.onclick=function(){
		var way1 = parseInt(oMin2.value)+parseInt(oSecond1.value);
//		console.log(way1);
		var way2 = parseInt(oKm.value);
//		console.log(way2);
		var way3= parseInt(oMeter.value) ;
//		console.log(way3);
		
		if (way1==0 && way2!=0 && way3==0 ) {
			console.log("a");
			oMin2.value=parseInt(3600*oKm.value/60);
			oSecond1.value=parseInt((3600*oKm.value)%60);
			oMeter.value=parseFloat(oKm.value*5/18).toFixed(2)
		} else if(way1!=0 && way2==0 && way3==0 ){
			console.log("b");
			oKm.value=parseFloat(3600/way1).toFixed(2);
			oMeter.value=parseFloat(1000/way1).toFixed(2);
		} else if(way1==0 && way2==0 && way3!==0){
			console.log("c");
			oMin2.value=parseInt(1000*oMeter.value/60);
			oSecond1.value=parseInt((1000*oMeter.value)&60);
			oKm.value=parseFloat(oMeter.value*18/5).toFixed(2);
		} else {
			console.log("d");
			oKm.value=parseFloat(3600/way1).toFixed(2);
			oMeter.value=parseFloat(1000/way1).toFixed(2);
		}
	

}