var oRightNow = document.getElementById("rightNow");
var oName = document.getElementById("user");
var oPass = document.getElementById("pass");
var oWrongPass=document.getElementById("wrongPass");
var oWrongUser=document.getElementById("wrongUser");
oName.onfocus=function(){
	oWrongUser.style.display="none";
}
oPass.onfocus=function(){
	oWrongPass.style.display="none";
}
oRightNow.onclick = function(){
	var nameVal = oName.value;
	var passVal = oPass.value
	if(!nameVal){
		oWrongUser.style.display="block";
	}
	if(!passVal){
		oWrongPass.style.display="block";
	}
	if(nameVal&&passVal){
		var arr = getCookie("register");
		if(arr.length==0){
			alert(1)
			oWrongUser.style.display="block";
			return;
		}
		for (var i=0;i<arr.length;i++) {
			if(arr[i]["name"]==nameVal&&arr[i]["pass"]==passVal){
				open("index.html");
			}else if(arr[i]["name"]==nameVal&&arr[i]["pass"]!=passVal){
				oWrongPass.style.display="block";
			}else{
				oWrongUser.style.display="block";
			}
		}
	}
}

//function setCookie(data,val){
//	var gArr=getCookie();
//	//data = [{'imgSrc':ddd,'price':''},{}]
//	console.log(gArr)
//	for (var i=0;i<gArr.length;i++) {
//		console.log(gArr[i]["name"]+";"+val["name"])
//		if(gArr[i]["name"]==val["name"]){
//			alert("你的用户名重复，请更换用户名");
//			return false;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
//		}
//	}
//	gArr.push(val);
//	var strArr =JSON.stringify(gArr)
//	var oDate = new Date();
//	oDate.setDate(oDate.getDate()+100);
//	document.cookie =data+' 
//	='+strArr +';expires='+oDate;
//	return true;
//}
//function getCookie(){
//	if(document.cookie){
//		var arr = document.cookie.split('=')
//		var str = arr[1];
//		//str2是一个数组
//		var str2=JSON.parse(str);
//		return str2;
//	}else{
//		var a=[];
//		return a;
//	}
//}
function setCookie(data,val){
	var gArr=getCookie("register");
	//data = [{'imgSrc':ddd,'price':''},{}]
	console.log(gArr+1)
	for (var i=0;i<gArr.length;i++) {
		console.log(gArr[i]["name"]+";"+val["name"])
		if(gArr[i]["name"]==val["name"]){
			alert("你的用户名重复，请更换用户名");
			return false;
		}
	}
	gArr.push(val);
	var strArr =JSON.stringify(gArr)
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+100);
	document.cookie =data+'='+strArr +';expires='+oDate;
	return true;
}
function getCookie(name){
	if(document.cookie){
		var cks = document.cookie.replace(/;\s/g,";");
		// name=1;pwd=2;age=3
		var reg = new RegExp('(;|^)'+name+'=([^;].*?)(;|$)');
		console.log(document.cookie);
		var result = cks.match(reg);
		if(!result){
			result = []
			return result;
		}else{
			result = result[2];
		}
		console.log(result+"result")
		console.log(typeof result+"result")
		var arr = result.split('=')
		console.log(arr+"arr")
		console.log(typeof arr+"arr")
		var str = arr[0];
		console.log(str+"str")
		console.log(typeof str+"str")
		//str2是一个数组
		var str2=JSON.parse(str);
		console.log(str2)
		return str2;
	}else{
		var a=[];
		return a;
	}
}