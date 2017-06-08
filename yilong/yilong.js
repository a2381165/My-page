$(document).ready(function(){
	//图片轮播
	var i=0;
	var t=setInterval(move,3000);
	$('.dots li:first-child').css({'background':'url(img/icon_index.png) 91px 72px'});
	$('.dots li').click(function(){
	$('.backgroud img').eq($(this).index()).fadeIn(700).siblings().hide();
	$(this).css({'background':'url(img/icon_index.png) 91px 72px'}).siblings().css({'background':'url(img/icon_index.png) -508px -368px'});
	i=$(this).index();
	})
	
	$('.banner').mouseenter(function(){
		clearInterval(t);
	})
	$('.banner').mouseleave(function(){
		t=setInterval(move,3000);
	})
	function move(){
		i++;
		if(i==5){
			i=0;	
		}
		console.log(i);
		$(".dots li").eq(i).addClass("active").siblings().removeClass("active");
		$(".backgroud img").eq(i).fadeIn(700).siblings().hide();
		$('.dots .active').css({'background':'url(img/icon_index.png) 91px 72px'}).siblings().css({'background':'url(img/icon_index.png) -508px -368px'});
	}
	//	搜索栏导航
	$('.search_box ul li').click(function(){
		$('.search_text>div').eq($(this).index()).show().siblings().hide();
		$(this).css({
			'background':'#FFF',
			'color': '#37D',
			'border-right': '1px solid #FFF'
		}).siblings().css({
			'color': '#555',
			'background': '#F3F3F3',
			'border-right': '1px solid #E1E1E1'
		});
		$(this).find('i').css({
			'backgroundPositionX':'44px'
		});
		$(this).siblings().find('i').css({
			'backgroundPositionX':'17px'
		});
		
	});
	//	搜索栏内容
	$('.hotel_point span').click(function(){
		$(this).css({'border-bottom': '2px solid #37D'}).siblings().css({'border-bottom': '2px solid #aaa'})
		$(this).find('b').css({'color': '#37D'});
		$(this).siblings().find('b').css({'color': '#555'});
		$(this).find('i').show();
		$(this).siblings().find('i').hide();
	});
	$('.hotel_international').click(function(){
		$('.input').find('dd #beijing').val('首尔');
		$('#inputword').val('商圈/地标/景点/酒店名');
		$('.mapsearch').hide()
	});
	$('.hotel_cn').click(function(){
		$('.input').find('dd #beijing').val('北京市');
		$('#inputword').val('如位置/酒店名/品牌');
		$('.mapsearch').show()
	})
	//手风琴图片展示
	$(".total li").delay(500).animate({width:168},100);
	$('.total li:first-child').stop().animate({width:402},1000).siblings("li").stop().animate({width:133},1000);
	$('.loginspace').delay(1000).slideDown(1000,'linear');
	$(".total li").mouseenter(function(){
		$(this).stop().animate({width:402},300).siblings("li").stop().animate({width:133},300);
		$(this).children('a').children('.tit').hide();
	}).mouseleave(function () {
        $(this).stop().animate({width:168},300).siblings("li").stop().animate({width:172},300);
        $(this).children('a').children('.tit').show()
	});
	//	目的地指数页面切换
	$('.domestic h3 span').click(function(){
		console.log('1')
		$('.domestic ul').eq($(this).index()).show().siblings('ul').hide();
		$(this).css({
			'background': '#F66 ',
			'color': '#fff',
			'border': '1px solid #F66'
		}).siblings().css({
			'background': 'none',
			'color': '#555',
			'border': '1px solid white'
		})
	});
	$('.international h3 span').click(function(){
		$('.international ul').eq($(this).index()).show().siblings('ul').hide();
		$(this).css({
			'background': '#F66 ',
			'color': '#fff',
			'border': '1px solid #F66'
		}).siblings().css({
			'background': 'none',
			'color': '#555',
			'border': '1px solid white'
		})
	});
	//超值特价票页面切换
	$('.plane_ticket h3 span').click(function(){
		$('.plane_ticket .tap ul').eq($(this).index()).show().siblings().hide()
		$(this).css({
			'background': '#49f',
			'color': '#fff',
			'border': '1px solid #49f'
		}).siblings().css({
			'background': 'none',
			'color': '#555',
			'border': '1px solid white'
		})
	});
	$('.train_ticket h3 span').click(function(){
		$('.train_ticket .tap ul').eq($(this).index()).show().siblings().hide()
		$(this).css({
			'background': '#49f',
			'color': '#fff',
			'border': '1px solid #49f'
		}).siblings().css({
			'background': 'none',
			'color': '#555',
			'border': '1px solid white'
		})
	});
	//	旅游指南页面切换
	$('.pic_left ul li').mouseover(function(){
		$(this).find('a').css({
			'background':'#77cc11',
			'color': 'white'
		});
		$(this).siblings().find('a').css({
			'background':'none',
			'color': '#555'
		});
		$('.pic_left ol li').eq($(this).index()).show().siblings().hide();
	})
	
})

