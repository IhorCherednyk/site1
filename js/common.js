$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    console.log($(this))  
        $('.panel-top').addClass("sticky");
        $('#header').css("padding-top","85px");
    }
    else{
        $('.panel-top').removeClass("sticky");
        $('#header').css("padding-top","0");
    }
});

jQuery(document).ready(function($) {

	$(".toggle-mnu").click(function() {
		$(".main-nav").slideToggle();
		return false;
	});

	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		fluidSpeed : 2000,
		autoplaySpeed : 2000,
		navSpeed : 1000,
		dotsSpeed : 1000,
		dragEndSpeed : 1000
	});

	var mapMouseLeave = function (event) {
		var th = $(this);

		th.on('click', mapClick);
		th.off('mouseleave', mapMouseLeave);
		th.find('iframe').css("pointer-events", "none");
	}
	var mapClick = function (event) {
		var th  = $(this);
		console.log("hi")
		th.off('click', mapClick);
		th.find('iframe').css("pointer-events", "auto");
		th.on('mouseleave', mapMouseLeave);
	}
	$('.maps').on('click', mapClick);

});
