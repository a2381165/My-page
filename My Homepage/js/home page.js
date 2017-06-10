window.onload=function(){
	var Home=document.getElementsByClassName("home-page")[0];
	var oNav=document.getElementsByClassName("nav")[0];
	var carousel=document.getElementsByClassName('carousel')[0];
	var a=oNav.getElementsByTagName("li");
	var b=oNav.getElementsByTagName("a");
	
	function move1(){
		a[0].style.top='11%';
		a[0].style.right='70%';
		a[1].style.top='40%';
		a[1].style.right='44.05%';
		a[2].style.top='40%';
		a[2].style.right='57%';
		a[3].style.top='40%';
		a[3].style.right='31.5%';
		$('.carousel').slideDown(1000)
	}
	function move2(){
		a[0].style.top='11%';
		a[0].style.right='70%';
		a[1].style.top='40%';
		a[1].style.right='56.56%';
		a[2].style.top='40%';
		a[2].style.right='44.05%';
		a[3].style.top='40%';
		a[3].style.right='31.5%';
	}
	function move3(){
		a[0].style.top='11%';
		a[0].style.right='70%';
		a[1].style.top='40%';
		a[1].style.right='56.56%';
		a[2].style.top='40%';
		a[2].style.right='31.5%';
		a[3].style.top='40%';
		a[3].style.right='44.05%';
	}
	a[1].onclick=function(){
		move1()
	}
	a[2].onclick=function(){
		move2()
	}
	a[3].onclick=function(){
		move3()	
	}  
	
	$(window).scroll(move1());
	var t=setInterval(move,3500);
	var i=0;
		
	function move(){
		i++;
		if(i==3){
			i=0
		}
		$('.words ul li').eq(i).fadeIn().siblings().fadeOut();
		
	}
}	
