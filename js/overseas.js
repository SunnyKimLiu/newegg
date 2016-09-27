$(function(){
	$.get("carousel.json",function(data){
		var main = "";
		for (var key in data) {
			main = "";
			var children = data[key].childs
			for (var k in children) {
				main+='<dl data-itemId="'+k+'" data-sortId="'+key+'"><dt><a href="###"><img src="'+children[k]["src"]+'"/></a></dt>'+
				'<dd class="pdinfo">'+
				'<p class="info"><a href="detail.html?itemId='+k+'&sortId='+key+'" target="_blank">'+children[k].information+'</a></p>'+
				'<p class="prom"></p><p class="extraIcon"></p></dd>'+
				'<dd class="price"><strong><span id="">¥'+children[k].price+'</span></strong></dd>'+
				'<dd class="rightNow"><a href="###">立即抢购</a></dd></dl>'
//			car.html?itemId='+k+'&sortId='+key+'
			}
			$(".floor"+key+" .main").html(main)
		}
//		console.log($(".main dl").data())
		$(".main dl").on("click",".rightNow",function(){
			var shopInfo = $(this).parent().data();
			shopInfo.count = 1;
			addCar(shopInfo);
			open("car.html")
		})                            
	})
})
