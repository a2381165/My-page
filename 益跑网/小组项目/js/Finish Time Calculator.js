window.onload=function(){
	var odistance1=document.getElementById("distance1");
	var oselect1=document.getElementById("select1");
	var oselect2=document.getElementById("select2");
	var oselect3=document.getElementById("select3");
	var oplan=document.getElementById("plan");
	var oCaculate=document.getElementById("caculate");
	var oRepeat=document.getElementById("repeat");
	var ofinsh=document.getElementById("finsh");
	var ospan1=document.getElementById("span1");
	var ospan2=document.getElementById("span2");
	var ospan3=document.getElementById("span3");
	
	for(i=0;i<25;i++){
		oselect1.innerHTML+="<option>"+i+"</option>";
	}
	for(i=0;i<60;i++){
		oselect2.innerHTML+="<option>"+i+"</option>";
	}
	for(i=0;i<60;i++){
		oselect3.innerHTML+="<option>"+i+"</option>";
	}
	oRepeat.onclick=function(){
		odistance1.value=0;
		oselect1.value=0;
		oselect2.value=0;
		oselect3.value=0;
		oplan.value=0;
	}

	oCaculate.onclick=function(){
		time=parseFloat(oplan.value)/odistance1.value*(3600*oselect1.value+60*oselect2.value+parseFloat(oselect3.value));
		
		console.log(time);
		ofinsh.style.display="block";
		ospan1.innerHTML=parseInt(time/3600);
		if(ospan1.innerHTML<1){
			ospan2.innerHTML=parseInt(time/60);	
		}
		if(span1.innerHTML>=1){
			ospan2.innerHTML=parseInt(time%60);
		}
		ospan3.innerHTML=parseInt(time%60);
	}
}