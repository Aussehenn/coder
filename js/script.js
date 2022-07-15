new Swiper('.slaider__colum',{
	//Стрелка
	 navigation: {
		 nextEl: '.swiper-button-next', //Изенить стили и классы стрелок 
		 prevEl: '.swiper-button-prev'  //Изенить стили и классы стрелок 
	 }, 
	slidesPerView: 3,
	loop: true,
	simulateTouch: false,
	breakpoints: {// настройки для разных разрешений
		319: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		767: {
			slidesPerView: 2,
			spaceBetween: 10
		},
		991: {
			slidesPerView: 2,
			spaceBetween: 0
		},
		1192: {
			slidesPerView: 3,
			spaceBetween: 0
		}
	}
 });
 