window.onload=function(){
				var odistance=document.getElementById("distance");
			var oweight=document.getElementById("weight");
			var obtn2=document.getElementById("btn2");
			var obtn=document.getElementById("btn");
			var ocalorie=document.getElementById("calorie");
			var oca=document.getElementById("ca");
			obtn2.onclick=function(){
				ocalorie.innerHTML=(odistance.value)*(oweight.value)*1.036;
				oca.style.display="block";				
			}
			obtn.onclick=function () {
				odistance.value="";
				oweight.value="";
				oca.style.display="none";
			}
		}