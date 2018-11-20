		var getByClass = function (className) {
		  return document.getElementsByClassName(className);
		}
		var addClass = function (element , _className) {

		  var className = element.className.split(' ');
		  var classNameMap = {}

		  for(var i=0;i<className.length;i++){
		    classNameMap[ className[i]] = 1;
		  }
		  classNameMap[_className] = 1;

		  className = [];
		  for(i in classNameMap){
		    className.push(i);
		  }
		  element.className = className.join(' ');

		}
		var removeClass = function (element ,  _className) {

		  var className = element.className.split(' ');
		  var classNameMap = {}
		  for(var i=0;i<className.length;i++){ 
		    classNameMap[ className[i]] = 1;
		  }
		  delete classNameMap[_className];
		  className = [];
		  for(i in classNameMap){
		    className.push(i);
		  }
		  element.className = className.join(' ');
		}

		var sp_btn=document.getElementById("sp_btn");
		var menu_list=document.getElementById("menu-list");
		var menu=true;
		sp_btn.onclick = function () {
			if (menu) {
				// console.log(54454)
				menu_list.style.display="block";
				menu=false;
			}else {
				menu_list.style.display="none";
				menu=true;
			}
		}

window.onload=function() {


	var nav1=document.getElementById("nav1");
	var plan_btn=document.getElementsByClassName("plan_btn");
	var market_con=document.getElementsByClassName("market_con");

	addClass( getByClass('nav')[0] , 'nav_animate_init' );
	addClass( getByClass('nav_btn')[0] , 'nav_btnadd3' );
	
	addClass( getByClass('swiper-container')[0] , 'swiper-container_animate_init' );
	addClass( getByClass('plan')[0] , 'plan_animate_init' );
	addClass( getByClass('market')[0] , 'market_animate_init' );
	addClass( getByClass('about')[0] , 'about_animate_init' );
	addClass( getByClass('about_img')[0] , 'about_img_animate_init' );

	
	addClass( getByClass('apply_title')[0] , 'apply_title_animate_init' );
	addClass( getByClass('apply_line')[0] , 'apply_line_animate_init' );
	addClass( getByClass('apply_line')[0] , 'apply_line_animate_init' );
	addClass( getByClass('apply_img1')[0] , 'apply_img1_animate_init' );
	addClass( getByClass('apply_img2')[0] , 'apply_img2_animate_init' );


	addClass( getByClass('foot')[0] , 'foot_animate_init' );
	



	setTimeout(function () {
		addClass( getByClass('nav')[0] , 'nav_animate_done' );
		addClass( getByClass('swiper-container')[0] , 'swiper-container_animate_done' );
		addClass( getByClass('plan')[0] , 'plan_animate_done' );
		
	},100)
	window.onscroll = function () {

		var top  = document.body.scrollTop || document.documentElement.scrollTop;
		

		if(top>100){
			getByClass('nav_btn')[0].setAttribute('class','nav_btn nav_btnadd4');
			addClass( getByClass('market')[0] , 'market_animate_done' );
			// addClass( getByClass('nav')[0] , 'nav_black' );
			addClass( getByClass('nav')[0] , 'nav_btnadd' );
		}else {
			getByClass('nav_btn')[0].setAttribute('class','nav_btn nav_btnadd3');
			// removeClass( getByClass('nav')[0] , 'nav_black');
		}
		// console.log(document.documentElement.scrollTop+"  11")
		// console.log(getByClass('about')[0].offsetTop-document.documentElement.clientHeight+"  22")
		if(top>getByClass('about')[0].offsetTop-document.documentElement.clientHeight+200){
			getByClass('nav_btn')[0].setAttribute('class','nav_btn nav_btnadd5');
			addClass( getByClass('about')[0] , 'about_animate_done' );
			addClass( getByClass('about_img')[0] , 'about_animate_done' );
		}

		if(top>getByClass('apply')[0].offsetTop-document.documentElement.clientHeight+200){
			getByClass('nav_btn')[0].setAttribute('class','nav_btn nav_btnadd6');
			addClass( getByClass('apply_title')[0] , 'apply_title_animate_done' );
			addClass( getByClass('apply_line')[0] , 'apply_line_animate_done' );
			addClass( getByClass('apply_line')[0] , 'apply_line_animate_done' );
			addClass( getByClass('apply_img1')[0] , 'apply_img1_animate_done' );
			addClass( getByClass('apply_img2')[0] , 'apply_img2_animate_done' );
		}
		// if(top>getByClass('foot')[0].offsetTop-document.documentElement.clientHeight+150){
		if(top>getByClass('foot')[0].offsetTop-document.documentElement.clientHeight){
			addClass( getByClass('foot')[0] , 'foot_animate_done' );
		}
	}
	
	//切换
	for (var i = 0; i < plan_btn.length; i++) {
		plan_btn[i].a=i;
		plan_btn[i].onclick=function() {
			for (var i = 0; i < plan_btn.length; i++) {
				market_con[i].style.display="none";
			}
			market_con[this.a].style.display="block";
			market_con[this.a].style.background=r();
		}
	}




	// 轮播
	var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      //自动切换
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      //按钮
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      //分页器
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
	});
}
