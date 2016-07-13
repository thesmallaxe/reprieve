var currentscrollpos;

$('.title1').on('click', function(event) {
    // $('.mobile-tooltip-1').toggle('show');
    // currentscrollpos = $(window).scrollTop();

    if ($(".poped-up").length > 0) {
        console.log('test');
        // Do stuff with $(".Mandatory")
        $(this).each(function() {
            console.log('test2');
            // "this" points to current item in looping through all elements with
            // class="Mandatory"
            if ($(".poped-up").css('display') == 'block') {
                //your code
                console.log('test3');
                $(".poped-up").css('display', 'none');
            }

        });
    }
    $(".mobile-tooltip-1").addClass('poped-up');
    $('.mobile-tooltip-1').toggle('show');
});

$('.title2').on('click', function(event) {
    $('.mobile-tooltip-2').toggle('show');
    $(".mobile-tooltip-2").addClass('poped-up');
    currentscrollpos = $(window).scrollTop();
});

$('.title3').on('click', function(event) {
    $('.mobile-tooltip-3').toggle('show');
    $(".mobile-tooltip-3").addClass('poped-up');
    currentscrollpos = $(window).scrollTop();
});

$('.title4').on('click', function(event) {
    $('.mobile-tooltip-4').toggle('show');
    $(".mobile-tooltip-4").addClass('poped-up');
    currentscrollpos = $(window).scrollTop();
});

$('.title5').on('click', function(event) {
    $('.mobile-tooltip-5').toggle('show');
    $(".mobile-tooltip-5").addClass('poped-up');
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