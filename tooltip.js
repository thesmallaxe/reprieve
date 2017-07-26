// Homepage edits
$('.surnav .topnav_block.secnav.last').before('<li class="topnav_block secnav"><a href="https://reprieve.bsd.net/page/contribute/donatenow" target="_blank" class="topnav_element secnav">Donate</a></li>');

$(".primary h1, .primary h2, .section_subtitle").wrapInner("<span></span>");

if (document.getElementById("wide-column")) {
    $(".maincol.with_single").addClass("full-col");
}


// Tooltip

var currentscrollpos;

$('.title1').on('click', function(event) {
    if ($(window).width() >= 768) {
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
    if ($(window).width() >= 768) {
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
    if ($(window).width() >= 768) {
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
    if ($(window).width() >= 768) {
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
    if ($(window).width() >= 768) {
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
    if ($(window).width() >= 768) {
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
    if ($(window).width() >= 768) {
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

$('.close6').on('click', function(event) {
    $(".mobile-tooltip-6").css('display', 'none');
    $("html, body").animate({
        scrollTop: currentscrollpos
    }, 0);
});

$('.close7').on('click', function(event) {
    $(".mobile-tooltip-7").css('display', 'none');
    $("html, body").animate({
        scrollTop: currentscrollpos
    }, 0);
});

// Donation page

if (document.getElementById("donation-container")) {
    $(".maincol.with_single").addClass("full-col");
    $(".primary h1").addClass("donation-heading");
    $(".surcore").css('display', 'none');
}

$(function() {
    $(".give-monthly-tab").click(function() {
        $(".tab").removeClass("picked-tab");
        $(this).addClass("picked-tab");
        $(".main-donate").removeClass("picked-main");
        $(".main-donate").removeClass("unpicked-main");
        $(".give-monthly-main").addClass("picked-main");
        $(".give-now-main").addClass("unpicked-main");
    });
});

$(function() {
    $(".give-now-tab").click(function() {
        $(".tab").removeClass("picked-tab");
        $(this).addClass("picked-tab");
        $(".main-donate").removeClass("picked-main");
        $(".main-donate").removeClass("unpicked-main");
        $(".give-now-main").addClass("picked-main");
        $(".give-monthly-main").addClass("unpicked-main");
    });
});

$('.give-now .other input').change(function() {
    var var1 = $(this).val();
    $(".give-now .other .donate-link").attr("href", "https://reprieve.bsd.net/page/contribute/donatenow?default_amt=" + var1)
});

$('.give-monthly .other input').change(function() {
    var var2 = $(this).val();
    $(".give-monthly .other .donate-link").attr("href", "https://secure.edirectdebit.com/Reprieve/Donate2/Desktop-Form-Page/?default_amt=" + var2)
});

// Countdown function DPAW

$("#countdown-container").appendTo(".navcol");

var timeInSecs;
var ticker;

function startTimer(secs) {
    timeInSecs = parseInt(secs);
    ticker = setInterval("tick()", 1000);
}

function tick() {
    var secs = timeInSecs;
    if (secs > 0) {
        timeInSecs--;
    } else {
        clearInterval(ticker);
        startTimer(4 * 60); // 4 minutes in seconds
    }

    var hours = Math.floor(secs / 3600);
    secs %= 3600;
    var mins = Math.floor(secs / 60);
    secs %= 60;
    var pretty = ((hours < 10) ? "0" : "") + hours + ":" + ((mins < 10) ? "0" : "") + mins + ":" + ((secs < 10) ? "0" : "") + secs;
    document.getElementById("countdown").innerHTML = pretty;
}

startTimer(240 * 60);

// Twitter Intent Pop-up

(function() {
    if (window.__twitterIntentHandler) return;
    var intentRegex = /twitter\.com\/intent\/(\w+)/,
        windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes',
        width = 550,
        height = 420,
        winHeight = screen.height,
        winWidth = screen.width;

    function handleIntent(e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
            m, left, top;

        while (target && target.nodeName.toLowerCase() !== 'a') {
            target = target.parentNode;
        }

        if (target && target.nodeName.toLowerCase() === 'a' && target.href) {
            m = target.href.match(intentRegex);
            if (m) {
                left = Math.round((winWidth / 2) - (width / 2));
                top = 0;

                if (winHeight > height) {
                    top = Math.round((winHeight / 2) - (height / 2));
                }

                window.open(target.href, 'intent', windowOptions + ',width=' + width +
                    ',height=' + height + ',left=' + left + ',top=' + top);
                e.returnValue = false;
                e.preventDefault && e.preventDefault();
            }
        }
    }

    if (document.addEventListener) {
        document.addEventListener('click', handleIntent, false);
    } else if (document.attachEvent) {
        document.attachEvent('onclick', handleIntent);
    }
    window.__twitterIntentHandler = true;
}());


//Mental Health Page
if (document.getElementById("mental-health")) {
    $(".section_header").addClass("fullwide");
    $(".social_base").before("<div id='before-container'></div>");
    $("#before").appendTo("#before-container");
}


// Tshirts Page

if (document.getElementById("tshirt-image")) {
    $(".primary .portrait_img").addClass("tshirt-hide");
}

if (document.getElementById("greetings")) {
    $(".maincol.with_single").addClass("full-col");
    $(".surcore").css('display', 'none');
    $(".primary h1").addClass("greetings-heading");
}
if (document.getElementById("card-page")) {
    $(".primary .portrait_img").addClass("greeting-stretch");
}


// Last Words

if (document.getElementById("lastwordsvid")) {
    $(".maincol.with_single").addClass("lastwords-fullwide");
    $("#core").addClass("lastwords-core");
    $(".lastwords-container").addClass("render");
    $(".help-donate").addClass("render");
    $(".lastwordsvid").addClass("render");
    $(".surcore").hide();
    $(".primary h1").addClass("lastwords-heading");
}
