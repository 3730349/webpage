		//获取类
		var getByClass = function (className) {
		  return document.getElementsByClassName(className);
		}
		//添加类
		var addClass = function (element , _className) {
			//获取此元素的所有类
		  var className = element.className.split(' ');
		  var classNameMap = {}

		  for(var i=0;i<className.length;i++){
		  	//给对象属性赋值，值随意
		    classNameMap[className[i]] = 1;
		  }
		  classNameMap[_className] = 1;

		  className = [];
		  for(i in classNameMap){
		  	//将值存入数组
		    className.push(i);
		  }
		  //放入字符串中并用空格隔开
		  element.className = className.join(' ');

		}
		//移除类
		var removeClass = function (element ,  _className) {

		  var className = element.className.split(' ');
		  var classNameMap = {}
		  for(var i=0;i<className.length;i++){ 
		    classNameMap[ className[i]] = 1;
		  }
		  //js删除对象属性
		  delete classNameMap[_className];
		  className = [];
		  for(i in classNameMap){
		    className.push(i);
		  }
		  element.className = className.join(' ');
		}
		

window.onload=function () {
	addClass( getByClass('nav')[0] , 'nav_animate_init' );
	addClass( getByClass('cu_header_small')[0] , 'cu_header_small_animate_init' );
	// addClass( getByClass('nav_btn')[0] , 'nav_btnadd3' );
	
	addClass( getByClass('swiper-container')[0] , 'swiper-container_animate_init' );
	
	addClass( getByClass('development1')[0] , 'development1_animate_init' );
	addClass( getByClass('development2')[0] , 'development2_animate_init' );
	addClass( getByClass('development_img')[0] , 'development_img_animate_init' );
	
	addClass( getByClass('certify')[0] , 'certify_animate_init' );
	addClass( getByClass('introduce1_Ri')[0] , 'introduce1_Ri_animate_init' );
	addClass( getByClass('introduce1_Le')[0] , 'introduce1_Le_animate_init' );

	addClass( getByClass('programme1')[0] , 'programme1_animate_init' );
	addClass( getByClass('programme2')[0] , 'programme2_animate_init' );


	addClass( getByClass('apply_img2')[0] , 'apply_img2_animate_init' );

	addClass( getByClass('about')[0] , 'about_animate_init' );

	addClass( getByClass('foot')[0] , 'foot_animate_init' );
	
	setTimeout(function () {
		addClass( getByClass('nav')[0] , 'nav_animate_done' );
		addClass( getByClass('cu_header_small')[0] , 'cu_header_small_animate_done' );
		addClass( getByClass('swiper-container')[0] , 'swiper-container_animate_done' );
	},100);
	
	
	window.onscroll = function () {
		var doc = document.body.scrollTop || document.documentElement.scrollTop;
		// console.log(doc)
			var deve = getByClass("development")[0].offsetTop  - doc;
			if (deve <= 300) {
				addClass( getByClass('development1')[0] , 'development1_animate_done' );
				addClass( getByClass('development2')[0] , 'development2_animate_done' );
				addClass( getByClass('development_img')[0] , 'development_img_animate_done' );
			}

			var cert = getByClass("certify")[0].offsetTop  - doc;
			if (cert <= 310) {
				addClass( getByClass('certify')[0] , 'certify_animate_done' );
				addClass( getByClass('introduce1_Ri')[0] , 'introduce1_Ri_animate_done' );
				addClass( getByClass('introduce1_Le')[0] , 'introduce1_Le_animate_done' );
			}

			var prog = getByClass("programme1")[0].offsetTop  - doc;
			if (prog <= 560) {
				addClass( getByClass('programme1')[0] , 'programme1_animate_done' );
				addClass( getByClass('programme2')[0] , 'programme2_animate_done' );
			}
						
			var apply = getByClass("apply_img2")[0].offsetTop  - doc;
			if (apply <= 350) {
				addClass( getByClass('apply_img2')[0] , 'apply_img2_animate_done' );
				addClass( getByClass('about')[0] , 'about_animate_done' );
			}			
			var foot = getByClass("foot")[0].offsetTop  - doc;
			
			if (foot <= 700) {
				addClass( getByClass('foot')[0] , 'foot_animate_done' );
			}
			
			console.log(foot)
	}


		//按钮高度
		var c;
		var hei1 = function (h1) {
			var aa=getByClass("introduce1")[h1];
			var b=aa.getElementsByClassName("introduce1_con")[0];
			c=aa.getElementsByClassName("introduce1_Le")[0].offsetHeight;
			for (var i = 0; i <getByClass("introduce1").length; i++) {
				if ($('.introduce1').eq(i).css("display")==='block') {
					//如果内容的高度小于左边按钮的高度，则将总高度设为按钮的高度
					if (b.offsetHeight<=c) {
						getByClass("introduce1")[h1].style.height=c+"px";
					}else {
						getByClass("introduce1")[h1].style.height=b.offsetHeight+"px";
					}
					
					getByClass("int")[0].style.height=getByClass("introduce1")[h1].offsetHeight+"px";
				}
			}
		}

		var hei2 = function (h2) {
			console.log(h2+"qqq")
			for (var i = 0; i <getByClass("introduce1").length; i++) {
				if ($('.introduce1').eq(i).css("display")==='block') {
					if (getByClass("introduce1_con")[h2].offsetHeight<=c) {
						
						getByClass("introduce1")[i].style.height=c+"px";
					}else {
						getByClass("introduce1")[i].style.height=getByClass("introduce1_con")[h2].offsetHeight+"px";
					}
					// getByClass("introduce1")[i].style.height=getByClass("introduce1_con")[h2].offsetHeight+"px";
					getByClass("int")[0].style.height=getByClass("introduce1")[i].offsetHeight+"px";
				}
			}
		}

		/*开始加载时*/
		hei1(0);
		var res_h=0;
		//手机导航切换
		var sp_btn=document.getElementById("sp_btn");
		var menu_list=document.getElementById("menu-list");
		var menu=true;
		sp_btn.onclick = function () {
			if (menu) {
				menu_list.style.display="block";
				menu=false;
			}else {
				menu_list.style.display="none";
				menu=true;
			}
		}

		window.onresize=function(){
				/*窗口变化时触发*/
				hei2(res_h);
		}

	var certifySwiper = new Swiper('#certify .swiper-container', {
		watchSlidesProgress: true,
		slidesPerView: 'auto',
		centeredSlides: true,
		slideToClickedSlide: true,
		loop: true,
		loopedSlides: 5,
		// autoplay: true,
		navigation: {
			nextEl: '#swiper2_btn_next1',
			prevEl: '#swiper2_btn_prev1',
		},
		// pagination: {
		// 	el: '.swiper-pagination',
		// },
		on: {
			progress: function(progress) {
				for (i = 0; i < this.slides.length; i++) {
					var slide = this.slides.eq(i);
					var slideProgress = this.slides[i].progress;
					modify = 1;
					if (Math.abs(slideProgress) > 1) {
						modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
					}
					// translate = slideProgress * modify * 260 + 'px';
					translate = slideProgress * modify+ '%';
					scale = 1 - Math.abs(slideProgress) / 5;
					zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
					slide.transform('translateX(' + translate + ') scale(' + scale + ')');
					slide.css('zIndex', zIndex);
					slide.css('opacity', 1);
					if (Math.abs(slideProgress) > 3) {
						slide.css('opacity', 0);
					}
				}
			},
			setTransition: function(transition) {
				for (var i = 0; i < this.slides.length; i++) {
					var slide = this.slides.eq(i)
					slide.transition(transition);
				}

			}
		}

	});
	/*点击轮播切换*/
		for (let i = 0; i < getByClass('lb').length; i++) {
			getByClass('lb')[i].onclick = function () {
				//获取index
				var ind=certifySwiper.realIndex;
			  for (var j = 0; j < getByClass('introduce1').length; j++) {
				getByClass('introduce1')[j].style.display="none";
			  }
			  getByClass('introduce1')[ind].style.display="block";
			  /*将introduce1下的第一个introduce1_con显示*/
			  getByClass('introduce1')[ind].getElementsByClassName("introduce1_con")[0].style.display="block";
			  hei1(ind);
			}
		}

	/*点击按钮切换*/
	for (let i = 0; i < getByClass('introduce1_btn').length; i++) {
		getByClass('introduce1_btn')[i].onclick = function () {

			for (var j = 0; j < getByClass('introduce1_con').length; j++) {
				getByClass('introduce1_con')[j].style.display="none";
				removeClass(getByClass('introduce1_btn')[j] , 'back' );
			}
			getByClass('introduce1_con')[i].style.display="block";
			// 点击后背景改变
			addClass(getByClass('introduce1_btn')[i] , 'back');
			hei2(i);
			console.log(i+"  lll")
			res_h=i;
		}
	}
	// 轮播
	var swiper = new Swiper('#swiper1', {
     //间隔
      // spaceBetween: 30,
      centeredSlides: true,
      //自动切换
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      //分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      //按钮
      navigation: {
        nextEl: '#swiper1_btn_next1',
        prevEl: '#swiper1_btn_prev1',
      },
	});

  }
// }