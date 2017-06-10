window.onload=function(){
				//第一步 获取元素
				var oList=document.getElementById("list");
				var oleft=document.getElementsByClassName("left")[0];
				var oright=document.getElementsByClassName("right")[0];
				var i=0;
				
				oleft.onclick=function(){
					/*console.log(1);*/
					i++;
					if(i>0){
						i=-2;
					}
					
					oList.style.left=i*1024+"px";
					console.log("left:"+i);
				}
				
				oright.onclick=function(){
					i--;
					if(i<-2){
						i=0;
					}
					
					console.log("right:" +i);
					oList.style.left=i*1024+"px";
					
					//console.log(1);
				}
			}