

//验证码验证
var code;
var dd;
window.onload=createCode();
function createCode(){
	code='';
	var checkCode=document.getElementById('code');

	dd=checkCode.value;
//	console.log(dd);
	var codeLength = 4;
	var random=new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
         'S','T','U','V','W','X','Y','Z');
         console.log(checkCode)
	for (var i = 0; i < codeLength; i++) {
		var index = Math.floor(Math.random()*36);
		code += random[index];
	}
	checkCode.value=code;
	
}
function validate(){
//	createCode();
	var txt=document.getElementsByClassName('check')[0].value.toUpperCase();
	var a=document.getElementsByClassName('prompt')[0];
    console.log(txt);
//	console.log(dd);
	console.log(code);
	if (txt.length<=0) {
		a.innerHTML='请输入验证码！';
	} else if(txt!==code){
		a.innerHTML='验证码错误';
		createCode();
		txt.value="";
	}else{
		alert('验证成功');
	}
	
}

