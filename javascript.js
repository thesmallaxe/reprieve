function closePopUp() {
    if ($(".poped-up").length > 0) {
        $(this).each(function() {
            console.log('test2');
            if ($(".poped-up").css('display') == 'block') {
                console.log('test3');
                $(".poped-up").css('display', 'none');
                // $(".poped-up").removeClass('poped-up');
            }
        });
    }
}

var currentscrollpos;

$('.title1').on('click', function(event) {
    closePopUp();
    if ($(".mobile-tooltip-1").hasClass('poped-up')) {
        $(".poped-up").removeClass('poped-up');
    } else {
        $(".poped-up").addClass('poped-up');
    }
    $(".mobile-tooltip-1").addClass('poped-up');
    $('.mobile-tooltip-1').toggle('show');
    currentscrollpos = $(window).scrollTop();
});

$('.title2').on('click', function(event) {
    closePopUp();
    if ($(".mobile-tooltip-2").hasClass('poped-up')) {
        $(".poped-up").removeClass('poped-up');
    } else {
        $(".poped-up").addClass('poped-up');
    }
    $(".mobile-tooltip-2").addClass('poped-up');
    $('.mobile-tooltip-2').toggle('show');
    currentscrollpos = $(window).scrollTop();
});

$('.title3').on('click', function(event) {
    closePopUp();
    if ($(".mobile-tooltip-3").hasClass('poped-up')) {
        $(".poped-up").removeClass('poped-up');
    } else {
        $(".poped-up").addClass('poped-up');
    }
    $(".mobile-tooltip-3").addClass('poped-up');
    $('.mobile-tooltip-3').toggle('show');
    currentscrollpos = $(window).scrollTop();
});

$('.title4').on('click', function(event) {
    closePopUp();
    if ($(".mobile-tooltip-4").hasClass('poped-up')) {
        $(".poped-up").removeClass('poped-up');
    } else {
        $(".poped-up").addClass('poped-up');
    }
    $(".mobile-tooltip-4").addClass('poped-up');
    $('.mobile-tooltip-4').toggle('show');
    currentscrollpos = $(window).scrollTop();
});

$('.title5').on('click', function(event) {
    closePopUp();
    if ($(".mobile-tooltip-5").hasClass('poped-up')) {
        $(".poped-up").removeClass('poped-up');
    } else {
        $(".poped-up").addClass('poped-up');
    }
    $(".mobile-tooltip-5").addClass('poped-up');
    $('.mobile-tooltip-5').toggle('show');
    currentscrollpos = $(window).scrollTop();
});


$('.close1').on('click', function(event) {
    $(".mobile-tooltip-1").css('display', 'none');
    $("html, body").animate({
        scrollTop: currentscrollpos
    }, 0);
});

$('.close2').on('click', function(event) {
    $(".mobile-tooltip-2").css('display', 'none');
    $("html, body").animate({
        scrollTop: currentscrollpos
    }, 0);
});

$('.close3').on('click', function(event) {
    $(".mobile-tooltip-3").css('display', 'none');
    $("html, body").animate({
        scrollTop: currentscrollpos
    }, 0);
});

$('.close4').on('click', function(event) {
    $(".mobile-tooltip-4").css('display', 'none');
    $("html, body").animate({
        scrollTop: currentscrollpos
    }, 0);
});

$('.close5').on('click', function(event) {
    $(".mobile-tooltip-5").css('display', 'none');
    $("html, body").animate({
        scrollTop: currentscrollpos
    }, 0);
});