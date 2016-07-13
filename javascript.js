var currentscrollpos;

$('.title1').on('click', function(event) {
	$('.mobile-tooltip-1').toggle('show');
	currentscrollpos = $(window).scrollTop();
});

$('.title2').on('click', function(event) {
	$('.mobile-tooltip-2').toggle('show');
	currentscrollpos = $(window).scrollTop();
});

$('.title3').on('click', function(event) {
	$('.mobile-tooltip-3').toggle('show');
	currentscrollpos = $(window).scrollTop();
});

$('.title4').on('click', function(event) {
	$('.mobile-tooltip-4').toggle('show');
	currentscrollpos = $(window).scrollTop();
});

$('.title5').on('click', function(event) {
	$('.mobile-tooltip-5').toggle('show');
	currentscrollpos = $(window).scrollTop();
});


$('.close1').on('click', function(event) {
	$(".mobile-tooltip-1").css('display', 'none');
	$("html, body").animate({ scrollTop: currentscrollpos }, 0);
});

$('.close2').on('click', function(event) {
	$(".mobile-tooltip-2").css('display', 'none');
	$("html, body").animate({ scrollTop: currentscrollpos }, 0);
});

$('.close3').on('click', function(event) {
	$(".mobile-tooltip-3").css('display', 'none');
	$("html, body").animate({ scrollTop: currentscrollpos }, 0);
});

$('.close4').on('click', function(event) {
	$(".mobile-tooltip-4").css('display', 'none');
	$("html, body").animate({ scrollTop: currentscrollpos }, 0);
});

$('.close5').on('click', function(event) {
	$(".mobile-tooltip-5").css('display', 'none');
	$("html, body").animate({ scrollTop: currentscrollpos }, 0);
});