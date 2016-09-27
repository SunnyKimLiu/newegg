carousel();
function carousel(){
	var $carousel = $("#carousel");
	var $img=$("#carousel img");
	var $li = $("#carousel ul li");
	var $size = 0;
	var timer=null;
	timer = setInterval(function(){
		$img.eq($size).fadeOut(1000,function(){
			$size++;
			if($size>=6){
				$size=0;
			}
			$img.eq($size).fadeIn(1000);
			$li.eq($size).css("background-color","#ff6600").siblings().css("background-color","#737373")
		});
	},2000)
	 $carousel.mouseover(function(){
	 	clearInterval(timer)
	 }).mouseout(function(){
	 	timer = setInterval(function(){
			$img.eq($size).fadeOut(1000,function(){
				$size++;
				if($size>=6){
					$size=0;
				}
				$img.eq($size).fadeIn(1000);
				$li.eq($size).css("background-color","#ff6600").siblings().css("background-color","#737373")
			});
		},2000)
	 })
	 $li.click(function(){
	 	var $_this = $(this)
			$img.eq($size).fadeOut(function(){
				$size = $_this.index();
				$img.eq($size).fadeIn();
				$li.eq($size).css("background-color","#ff6600").siblings().css("background-color","#737373")
			})
	 })
 
}
 
 

//限时抢购
proslider();
function proslider(){
	var $ul = $("#noSpace .proslider .moveBox ul");
	var $li = $("#noSpace .proslider .moveBox ul li");
	var $size = $li.size();
	var $left = $("#left");
	var $right = $("#right");
	var $width =$li.eq(0).outerWidth(); 
	var index = 0;
	$left.click(function(){
		index++;
		if(index>=$size-4){
				$ul.animate("left",($size-4)*$width*(-1));
				index=$size-4;
		}
		$ul.animate({"left":index*$width*(-1)});
	})
	$right.click(function(){
		index--;
		if(index<=0){
			$ul.animate({"left":0});
			index=0;
		}
		$ul.animate({"left":index*$width*(-1)});
	})
}

//好评热品
accordion();
function accordion(){
	var $div = $("#accordion>div");
	var $width = $div.eq(0).outerWidth();
	$div.each(function(i){
		if (i==0) {
			$div.eq(i).css("left",0)
		}else{
			$div.eq(i).css("left",$width+(i-1)*174)
		}
	})
	$div.mouseover(function(ev){
		ev.stopPropagation();
		var $index = $(this).index();
		$(this).zIndex=5;
		$div.each(function(i){
			if (i==0) {
				$div.eq(i).animate({"left":0},100)
			}
			if(0<i&&i<=$index){
				$div.eq(i).animate({"left":i*174},100)
			}
			if(i>$index){
				$div.eq(i).animate({"left":$width+(i-1)*174},100)
			}
		})
	})
}






//也许你也感兴趣
interest();
function interest(){
	var $sortsort = $(".sortsort");
	$sortsort.mouseover(function(){
		$(this).find(">a").css("border-bottom-color","#fff");
		$(this).find(">a").css("background","#fff");
		$(this).find(">ul").css("display","block");
		$(this).siblings().find(">a").css("border-bottom-color","#ccc");
		$(this).siblings().find(">a").css("background","#F6F6F6");
		$(this).siblings().find(">ul").css("display","none");
	})
}


////////////////////
//floor里的轮播图
floorBanner(".floor1");
floorBanner(".floor2");
floorBanner(".floor3");
floorBanner(".floor4");
function floorBanner(floorNum){
	var timer = null;
	var $floorBanner = $(floorNum+" .floorBanner");
	var $ul = $(floorNum+" .floorBanner>ul");
	var $li = $(floorNum+" .floorBanner ul li");
	var $aNum=$(floorNum+" .floorBanner>div>a");
	var $width = $li.eq(1).outerWidth();
	var $size = $li.size();
	var index = 0;
	timer = setInterval(function(){
		index++;
		if(index>=$size){
			index=-1;
			$ul.css({"left":0})
		}else{
			$aNum.eq(index).css("background-color","#ff6600");
			$aNum.eq(index).siblings().css("background-color","#000");
			$ul.animate({"left":$width*index*(-1)},500);
		}
		
	},2500)
	$floorBanner.mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){
		timer = setInterval(function(){
			index++;
			if(index>=$size){
				index=-1;
				$ul.css({"left":0})
			}else{
				$aNum.eq(index).css("background-color","#ff6600")
				$aNum.eq(index).siblings().css("background-color","#000");
				$ul.animate({"left":$width*index*(-1)},500);
			}
			
		},2500)
	})
	$aNum.mouseover(function(){
		index=$(this).index();
		$aNum.eq(index).css("background-color","#ff6600")
		$aNum.eq(index).siblings().css("background-color","#000");
//		$ul.animate({"left":$width*index*(-1)},500);
		$ul.css({"left":$width*index*(-1)});
	})
}

//计时器
limtTime("2016-10-1 15:36:30");
function limtTime(time){
	var timer= null;
	var oDate1 = new Date();
	var oTarDate1 = new Date(time)
	var cha1 = (oTarDate1.getTime()-oDate1.getTime())/1000;
	var second1 = Math.floor((cha1%(60*60))%60)
	var minite1 = Math.floor((cha1%(60*60))/60)
	var hour1 = Math.floor(cha1/(60*60))
	if(cha1<=0){
			$(".limtime").html("已经开始抢购啦");
			$(".limtime").css("color","red")
			return;
	}
	var str1 = hour1+"小时"+minite1+"分钟"+second1+"秒";
	$(".limtime").html(str1);
	timer=setInterval(function(){
		var oDate = new Date();
		var oTarDate = new Date(time)
		var cha = (oTarDate.getTime()-oDate.getTime())/1000;
		var second = Math.floor((cha%(60*60))%60)
		var minite = Math.floor((cha%(60*60))/60)
		var hour = Math.floor(cha/(60*60))
		if(cha<=0){
			$(".limtime").html("已经开始抢购啦");
			$(".limtime").css("color","red")
			clearInterval(timer);
			return;
		}
		var str = hour+"小时"+minite+"分钟"+second+"秒";
		$(".limtime").html(str);
	},1000)
	
}































































