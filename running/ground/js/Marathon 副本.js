
window.onload=function(){
	//自动填写option
	var oHour=document.getElementById("hour")
	for(i=0;i<25;i++){
				oHour.innerHTML+='<option value='+i+'>'+i+'</option>';

			}
	var oMinute=document.getElementById("minute")
	for(i=0;i<61;i++){
				oMinute.innerHTML+='<option value='+i+'>'+i+'</option>';
			}
	var oSecond=document.getElementById("second")
	for(i=0;i<61;i++){
				oSecond.innerHTML+='<option value='+i+'>'+i+'</option>';
			}
	//获取按钮
	var oCount=document.getElementById("count");
	var oReset=document.getElementById("reset");
	//获取表格填写位置
	var d1=document.getElementById("d1"); 
	var d2=document.getElementById("d2"); 
	var d3=document.getElementById("d3"); 
	var d5=document.getElementById("d5"); 
	var d10=document.getElementById("d10"); 
	var d15=document.getElementById("d15"); 
	var d20=document.getElementById("d20"); 
	var d21=document.getElementById("d21"); 
	var d30=document.getElementById("d30");
	var d42=document.getElementById("d42");
	
	/*补零函数*/
	function p(s) {
		return s<10?'0'+s:s;
	}
	
	var time;
	console.log(p(1));
	oCount.onclick=function(){
//		var x=document.getElementById("hour").selectedIndex;  获取索引
//		var y=document.getElementById("hour").options;    获取索引中的选项
//		console.log( y[x].value);
		var h=oHour.options[oHour.selectedIndex].value;
		var m=oMinute.options[oMinute.selectedIndex].value;
		var s=oSecond.options[oSecond.selectedIndex].value;
		var speedm=document.getElementById("speed_m").value;
		var speeds=document.getElementById("speed_s").value;
		var speedtime=speedm*60+speeds;
		console.log(speedm);
		console.log(speeds);
		if( speedm==0&&speeds==0){
			time=3600*h+60*m+(s-0)-1;
			console.log("a");
		}
		else{
			time=speedtime*42-1;
		}
		console.log(time);
		var time1=time/24;
		var time2=(time*2)/24;     
		var time3=(time*5)/24;
		var time4=(time*10)/24;
		var time5=(time*15)/24;
		var time6=(time*20)/24;
		var time7=(time*21)/24;
		var time8=(time*30)/24;
		var time9=time;
		console.log(time3);

//		计算时间函数
		function t(distence,time){
			var time=p(Math.floor(time/3600))+"时"+p(Math.floor(time%3600/60))+"分"+p(Math.floor(time%60))+"秒";
			console.log("a");
			console.log(distence);
			distence.innerHTML=time;
		}
		console.log(d1);
		t(d1,time1);
		t(d2,time2);
		t(d3,time3);
		t(d4,time4);
		t(d5,time5);
		t(d6,time6);
		t(d7,time7);
		t(d8,time8);
		t(d9,time9);
		
//	var index=oHour.selectedIndex;
//	console.log(index);
//	var a=oHour.options[index].value;
//	console.log(a);
//	var index =oHour.selectedIndex; // 选中索引
//
//    var text = oHour.options[index].text; // 选中文本
//		console.log(text);
//  var value = oHour.options[index].value; // 选中值
//  console.log(text);
//  console.log(value);
} 
}