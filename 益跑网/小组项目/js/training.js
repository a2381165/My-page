window.onload=function(){

var oHour=document.getElementById("slt_hours");
var oMinute=document.getElementById("slt_minutes");
var oSecond=document.getElementById("slt_seconds");
var oCount=document.getElementById("count");
console.log(oCount);
var oReset=document.getElementById("reset");
var time;
var time1;
var time2;
var time3;
var time4;
var time5;
var time6;
var speed;
var s1=document.getElementById("s1");
var s2=document.getElementById("s2");
var s3=document.getElementById("s3");
var s4=document.getElementById("s4");
var s5=document.getElementById("s5");
var s6=document.getElementById("s6");
var s7=document.getElementById("s7");

var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
var p3=document.getElementById("p3");
var p4=document.getElementById("p4");
var p5=document.getElementById("p5");
var p6=document.getElementById("p5");
var p7=document.getElementById("p7");
/*补零函数*/
	function p(s) {
		return s<10?'0'+s:s;
	}
//自动创建option
for(i=0;i<25;i++){
				oHour.innerHTML+='<option value='+i+'>'+i+'</option>';

		}
	for(i=0;i<60;i++){
				oMinute.innerHTML+='<option value='+i+'>'+i+'</option>';
		}
	for(i=0;i<60;i++){
				oSecond.innerHTML+='<option value='+i+'>'+i+'</option>';
			}

oCount.onclick=function(){
	//获取时间
	var h=oHour.options[oHour.selectedIndex].value;
	var m=oMinute.options[oMinute.selectedIndex].value;
	var s=oSecond.options[oSecond.selectedIndex].value;
	//获取距离
	var oDistance=document.getElementById("distance");

	
	time=3600*h+60*m+(s-0);
	console.log(time);
	speed=1000*oDistance.value/time;
	console.log(speed);
	time1=1500/speed;
	time2=3000/speed;
	time3=5000/speed;
	time4=10000/speed;
	time5=21000/speed;
	time6=42000/speed;
	
//		计算时间函数
	function t(dis,time){
		var time=p(Math.floor(time/3600))+"时"+p(Math.floor(time%3600/60))+"分"+p(Math.floor(time%60))+"秒";
		dis.innerHTML=time;
	}
	t(s1,time1);
	console.log(s4);
	t(s2,time2);
	t(s3,time3);
	t(s4,time4);
	t(s5,time5);
	t(s6,time6);
	console.log(speed);
	p1.innerHTML=(0.06*speed).toFixed(2);
	p2.innerHTML=(0.36*speed).toFixed(2);
	p3.innerHTML=speed.toFixed(2);
	
}
}
