
////// МЕНЮ //////

$(document).ready(function(){
	console.log()
	$('.menu-trigger').click(function(){
		$('.trigger').slideToggle(100);
	});

	$(window).resize(function() {		
		if (  $(window).width() > 601 ) {			
			$('.trigger').removeAttr('style');
		 }
	});
});	

//////// ПОЯВЛЕНИЕ ЭЛЕМЕНТОВ ПРИ ПРОКРУТКЕ ////////

$(document).ready(function(){
	window.sr = ScrollReveal({mobile: false,});
	sr.reveal('.frombtm', { 
	duration: 1700, 
	distance: '50px',
	origin:'bottom'
})
	sr.reveal('.fromLeft', { 
	duration: 1500, 
	distance: '500px',
	origin:'left'
})
	sr.reveal('.fromRight', { 
	duration: 1500,
	distance: '100px', 
	origin:'right'
})
	sr.reveal('.fromTop', { 
	duration: 1000,
	delay: 1000,
	distance: '100px', 
	origin:'top'
})
	sr.reveal('.learnMore', { 
	duration: 1000,
	delay: 2000,
	distance: '0px', 
	origin:'bottom'
})
	sr.reveal('.serice', { 
	duration: 1000,
	distance: '2000px',
	origin:'left' 
	}, 
	100);

	sr.reveal('.mvimg', { 
	duration: 1000,
	distance: '2000px',
	origin:'left' 
	}, 
	200);

	sr.reveal('.mvimg2', { 
	duration: 1000,
	distance: '2000px',
	origin:'left' 
	}, 
	200);

	sr.reveal('.worksAnimation', { 
	duration: 1000,
	distance: '500px',
	origin:'bottom' 
	}, 
	200);

	sr.reveal('.clientsAnimation', { 
	duration: 1000,
	distance: '2000px',
	origin:'bottom' 
	}, 
	200);

	sr.reveal('.blogAnimation', { 
	duration: 1000,
	distance: '10px',
	origin:'bottom' 
	}, 
	600);

	sr.reveal('.nav2Animation', { 
	duration: 500,
	distance: '200px',
	origin:'top' 
	}, 
	200);

	sr.reveal('.hipsterAnimation', { 
	distance: '0px',
	origin:'left',
	delay: '100', 
	}, 
	200);


});	

////// СЧЕТЧИК ЧИСЕЛ ////////

$(document).ready(function(){
    
	var show = true;

    $(window).on("scroll", function(){

    	if(!show) return false;

    	var winTop = $(window).scrollTop(); // возвращает растояние на которое прокручено окно
    	var elemTop = $("#numbers").offset().top; // возвращает растояние от дива с айди ворк до верха страницы

    	var winHeight =$(window).height (); // возвращает высоту окна 

    	if(winTop + winHeight - 70 >= elemTop){
    		 $(".spincrement").spincrement({
    		 	thousandSeparator: "",
    		 	duration: 8000
    		 });
    		show = false;
    	}
    });
});

/////////////// ПЛАВНАЯ ПРОКРУТКА К ЯКОРЮ //////////////////

$(document).ready(function(){
	$('a[href*=#]').bind("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
	scrollTop: $(anchor.attr('href')).offset().top
	}, 300);
	e.preventDefault();
	});
	return false;
});
