//获取id
function Id(id){
	var _id=document.getElementById(id);
	return _id;
}
// 生成min到max之间的数
function m(min,max){
	max++;
	var b=Math.floor(Math.random()*(max-min))+min;
	return b;
}
// 随机生成颜色
function r(){
	var a1=m(-10,255);
	var a2=m(-10,255);
	var a3=m(-10,255);
	var a='rgb('+a1+','+a2+','+a3+')';
	return a;
}
	//产生从from到to的num个不同的随机数
	function createRandom(num ,from ,to ){
		    var arr=[];
		    for(var i=from;i<=to;i++)
		        arr.push(i);
		    arr.sort(function(){
		        return 0.5-Math.random();
    	});
   			arr.length=num;
   			return arr;
	}