//无缝轮播图片
$(function(){
	var i=0;//位移量
	var clone=$(".show ul li").first().clone();
	$(".show ul").append(clone);
	var num=$(".show ul li").size();
	
	$('.content ul li').click(function(){
		$('.backgroud').css({display:'block'});
		var index=$(this).index();
		$('.num').text(index+1);
		i=index;
		$(".show ul").css({left:0});
		$(".show ul").stop().animate({left:-index*350},0);
	})
	
	$('.nav-arrows img:first-child').click(function(){
		i--;
		move();
//		$('.num').text(i+1);
	});
	
	$('.nav-arrows img:nth-child(2)').click(function(){
		
		i++;
		move();
//		$('.num').text(i+1);
//		if (i=num) {
//			$('.num').text(i);
//			
//		} else{
//			i=1;
//			$('.num').text(i+1);
//		}
//		$('.num').text(i);
	});
	
	$('.nav-arrows img:nth-child(3)').click(function(){
		$('.backgroud').css({display:'none'});
	});
	
	function move(){
		//第7张，右拉到头，并执行翻页
	if(i==num){
		$(".show ul").css({left:0});
		i=1;	
	}
	//第-1张，左拉到头，并执行翻页
	if(i==-1){
		$(".show ul").css({left:-(num-1)*350});
		i=num-2;
	}
	console.log(i);
	$(".show ul").stop().animate({left:-i*350});
//	if(i>6){
//		i=0;
//	}
		$('.num').text(i+1);
		if($('.num').text()==7){
			$('.num').text(1);
		}
//	}
	
}
})