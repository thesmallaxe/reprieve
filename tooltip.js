$('.surnav .topnav_block.secnav.last').before('<li class="topnav_block secnav"><a href="https://reprieve.bsd.net/page/contribute/donatenow" target="_blank" class="topnav_element secnav">Donate</a></li>');
$('nav .topnav_block:nth-of-type(5) a').text('Drone Strikes');

if (document.getElementById("mental-health")) {
			 $(".section_header").addClass("fullwide");
			 $(".social_base").before("<div id='before-container'></div>");
			 $("#before").appendTo("#before-container");
	 }
	 
	 if (document.getElementById("letter-background")) {
			$(".maincol.with_single").addClass("full-col");
		 	$(".surcore").css('display', 'none');
	 }

 if (document.getElementById("greetings")) {
			$(".maincol.with_single").addClass("full-col");
		 	$(".surcore").css('display', 'none');
	 }

if (document.getElementById("lastwordsvid")) {
			 $(".maincol.with_single").addClass("lastwords-fullwide");
			 $("#core").addClass("lastwords-core");
	$(".lastwords-container").addClass("render");
       $(".help-donate").addClass("render");
       $(".lastwordsvid").addClass("render");
	   $(".surcore").hide();
			 $(".primary h1").addClass("lastwords-heading");
	 }

var currentscrollpos;

$('.title1').on('click', function(event) {
	if($(window).width() >= 768) {
	$(".mobile-tooltip-2").css('display', 'none');
	$(".mobile-tooltip-3").css('display', 'none');
	$(".mobile-tooltip-4").css('display', 'none');
	$(".mobile-tooltip-5").css('display', 'none');
	$(".mobile-tooltip-6").css('display', 'none');
	$(".mobile-tooltip-7").css('display', 'none');
}
	$('.mobile-tooltip-1').toggle('show');
	currentscrollpos = $(window).scrollTop();
});

$('.title2').on('click', function(event) {
	if($(window).width() >= 768) {
	$(".mobile-tooltip-1").css('display', 'none');
	$(".mobile-tooltip-3").css('display', 'none');
	$(".mobile-tooltip-4").css('display', 'none');
	$(".mobile-tooltip-5").css('display', 'none');
	$(".mobile-tooltip-6").css('display', 'none');
	$(".mobile-tooltip-7").css('display', 'none');
	}
	$('.mobile-tooltip-2').toggle('show');
	currentscrollpos = $(window).scrollTop();
});

$('.title3').on('click', function(event) {
	if($(window).width() >= 768) {
	$(".mobile-tooltip-1").css('display', 'none');
	$(".mobile-tooltip-2").css('display', 'none');
	$(".mobile-tooltip-4").css('display', 'none');
	$(".mobile-tooltip-5").css('display', 'none');
	$(".mobile-tooltip-6").css('display', 'none');
	$(".mobile-tooltip-7").css('display', 'none');
}
	$('.mobile-tooltip-3').toggle('show');
	currentscrollpos = $(window).scrollTop();
});

$('.title4').on('click', function(event) {
	if($(window).width() >= 768) {
	$(".mobile-tooltip-1").css('display', 'none');
	$(".mobile-tooltip-2").css('display', 'none');
	$(".mobile-tooltip-3").css('display', 'none');
	$(".mobile-tooltip-5").css('display', 'none');
	$(".mobile-tooltip-6").css('display', 'none');
	$(".mobile-tooltip-7").css('display', 'none');
}
	$('.mobile-tooltip-4').toggle('show');
	currentscrollpos = $(window).scrollTop();
});

$('.title5').on('click', function(event) {
	if($(window).width() >= 768) {
	$(".mobile-tooltip-1").css('display', 'none');
	$(".mobile-tooltip-2").css('display', 'none');
	$(".mobile-tooltip-3").css('display', 'none');
	$(".mobile-tooltip-4").css('display', 'none');
	$(".mobile-tooltip-6").css('display', 'none');
	$(".mobile-tooltip-7").css('display', 'none');
}
	$('.mobile-tooltip-5').toggle('show');
	currentscrollpos = $(window).scrollTop();
});

$('.title6').on('click', function(event) {
	if($(window).width() >= 768) {
	$(".mobile-tooltip-1").css('display', 'none');
	$(".mobile-tooltip-2").css('display', 'none');
	$(".mobile-tooltip-3").css('display', 'none');
	$(".mobile-tooltip-4").css('display', 'none');
	$(".mobile-tooltip-5").css('display', 'none');
	$(".mobile-tooltip-7").css('display', 'none');
}
	$('.mobile-tooltip-6').toggle('show');
	currentscrollpos = $(window).scrollTop();
});

$('.title7').on('click', function(event) {
	if($(window).width() >= 768) {
	$(".mobile-tooltip-1").css('display', 'none');
	$(".mobile-tooltip-2").css('display', 'none');
	$(".mobile-tooltip-3").css('display', 'none');
	$(".mobile-tooltip-4").css('display', 'none');
	$(".mobile-tooltip-5").css('display', 'none');
	$(".mobile-tooltip-6").css('display', 'none');
}
	$('.mobile-tooltip-7').toggle('show');
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

$('.close6').on('click', function(event) {
	$(".mobile-tooltip-6").css('display', 'none');
	$("html, body").animate({ scrollTop: currentscrollpos }, 0);
});

$('.close7').on('click', function(event) {
	$(".mobile-tooltip-7").css('display', 'none');
	$("html, body").animate({ scrollTop: currentscrollpos }, 0);
});
