// Popup

var variant;
function getVariant() {
  var min = 1;
  var max = 3;
  return Math.floor(Math.random() * (max - min) + min);
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function checkCookie(variant) {
  var cookie = getCookie('repPopup');
  if (!cookie) {
    if(variant == 1) {
      // Add Modal css
      document.head.innerHTML += '<style>.modal_overlay *, .modal_overlay *:before, .modal_overlay *:after { box-sizing: border-box; } .modal_overlay { font-family: "effra","Helvetica Neue",helvetica,arial,sans-serif; display: block; position: fixed; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.4); overflow: auto; z-index: 99999; transition: opacity .35s; color: #252728; } .modal_overlay.hide { opacity: 0; pointer-events: none; transition: opacity .25s; } .modal_overlay .modal { margin: 100px auto; width: 100%; max-width: 620px; background-color: #f2f0ed; padding: 30px; position: relative; height: auto; } .modal_overlay .modal p { margin-bottom: 18px; font-size: 18px; line-height: 1.4; font-family: "Source Sans Pro",arial,sans-serif; } .modal_button_wrap { text-align: center; } .modal_button_wrap .button { background: #e35e14; border: solid 2px #e35e14; border-radius: 3px; color: #fff; min-width: 190px; margin: 5px; display: inline-block; padding: 10px; text-align: center; text-decoration: none !important; font-size: 18px; transition: all .1s ease-out; } .modal_button_wrap .button:hover { border: 2px solid #e35e14; color: #e35e14; background: none; } .modal h1 { font-size: 2.2rem; margin-bottom: 25px; margin-top: 0; padding-right: 40px; line-height: 1.3; } .modal h1 span{ border-bottom: 4px solid #e35e14; display: inline; padding-bottom: 2px; } #close-modal { position: absolute; top: 30px; right: 30px; width: 30px; height: 30px; line-height: 18px; font-size: 26px; text-align: center; padding: 0; border: 0; border-radius: 50%; cursor: pointer; background: #f2f0ed; transition: all .1s; } #close-modal:hover { color: #e35e14; } @media only screen and (max-width: 500px) { .modal_overlay .modal { padding: 20px; } #close-modal { top: 20px; right: 20px; } } @media only screen and (max-width: 420px) { .modal h1 { font-size: 1.8rem; } }</style>';
      // Add modal html
      document.body.innerHTML += '<div class="modal_overlay hide" id="modal_overlay"> <div class="modal" id="modal"> <button id="close-modal">&times;</button> <h1><span>An urgent message:</span></h1> <p> At Reprieve, we often have to act quickly to save lives - but we can\'t do it without your support. By making a regular donation, you can help us be ready to defend people from torture, imprisonment or execution at a moment\'s notice. <strong>Could you give a few pounds a month to support victims of extreme human rights abuses? Start a regular donation now - it takes three minutes:</strong> </p> <div class="modal_button_wrap"> <a href="https://secure.edirectdebit.com/Reprieve/Donate2/Desktop-Form-Page/?ref=homepage_popup_variant_1&amount=5" class="button">£5 per month</a><a href="https://secure.edirectdebit.com/Reprieve/Donate2/Desktop-Form-Page/?ref=homepage_popup_variant_1&amount=8" class="button">£8 per month</a><a href="https://secure.edirectdebit.com/Reprieve/Donate2/Desktop-Form-Page/?ref=homepage_popup_variant_1&amount=10" class="button">£10 per month</a><a href="https://secure.edirectdebit.com/Reprieve/Donate2/Desktop-Form-Page/?ref=homepage_popup_variant_1&amount=20" class="button">£20 per month</a> </div> </div> </div>';

      modalStuff();
    } else if(variant == 2) {
      // Add Modal css
      document.head.innerHTML += '<style>.modal_overlay *, .modal_overlay *:before, .modal_overlay *:after { box-sizing: border-box; } .modal_overlay { font-family: "effra","Helvetica Neue",helvetica,arial,sans-serif; display: block; position: fixed; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.4); overflow: auto; z-index: 99999; transition: opacity .35s; color: #252728; } .modal_overlay.hide { opacity: 0; pointer-events: none; transition: opacity .25s; } .modal_overlay .modal { margin: 100px auto; width: 100%; max-width: 620px; background-color: #f2f0ed; padding: 30px; position: relative; height: auto; } .modal_overlay .modal p { margin-bottom: 18px; font-size: 18px; line-height: 1.4; font-family: "Source Sans Pro",arial,sans-serif; } .modal_button_wrap { text-align: center; } .modal_button_wrap .button { background: #e35e14; border: solid 2px #e35e14; border-radius: 3px; color: #fff; min-width: 190px; margin: 5px; display: inline-block; padding: 10px; text-align: center; text-decoration: none !important; font-size: 18px; transition: all .1s ease-out; } .modal_button_wrap .button:hover { border: 2px solid #e35e14; color: #e35e14; background: none; } .modal h1 { font-size: 2.2rem; margin-bottom: 25px; margin-top: 0; padding-right: 40px; line-height: 1.3; } .modal h1 span{ border-bottom: 4px solid #e35e14; display: inline; padding-bottom: 2px; } #close-modal { position: absolute; top: 30px; right: 30px; width: 30px; height: 30px; line-height: 18px; font-size: 26px; text-align: center; padding: 0; border: 0; border-radius: 50%; cursor: pointer; background: #f2f0ed; transition: all .1s; } #close-modal:hover { color: #e35e14; } @media only screen and (max-width: 500px) { .modal_overlay .modal { padding: 20px; } #close-modal { top: 20px; right: 20px; } } @media only screen and (max-width: 420px) { .modal h1 { font-size: 1.8rem; } }</style>';
      // Add modal html
      document.body.innerHTML += '<div class="modal_overlay hide" id="modal_overlay"> <div class="modal" id="modal"> <button id="close-modal">&times;</button> <h1><span>Will you join us?</span></h1> <p> Reprieve is a community of people connected by a shared belief in justice and human rights. Together, we defend men and women facing execution, torture and unlawful detention around the world. <strong>Will you join us by becoming a regular supporter?</strong> </p> <div class="modal_button_wrap"> <a href="https://secure.edirectdebit.com/Reprieve/Donate2/Desktop-Form-Page/?ref=homepage_popup_variant_2&amount=5" class="button">£5 per month</a><a href="https://secure.edirectdebit.com/Reprieve/Donate2/Desktop-Form-Page/?ref=homepage_popup_variant_2&amount=8" class="button">£8 per month</a><a href="https://secure.edirectdebit.com/Reprieve/Donate2/Desktop-Form-Page/?ref=homepage_popup_variant_2&amount=10" class="button">£10 per month</a><a href="https://secure.edirectdebit.com/Reprieve/Donate2/Desktop-Form-Page/?ref=homepage_popup_variant_2&amount=20" class="button">£20 per month</a> </div> </div> </div>';

      modalStuff();
    }
  }
}
function modalStuff() {
  var modalOverlay = document.getElementById('modal_overlay');
  modalOverlay.addEventListener("click", function() {
    modalOverlay.classList.add('hide');
  });

  document.getElementById('close-modal').addEventListener("click", function() {
    modalOverlay.classList.add('hide');
  });

  document.getElementById('modal').addEventListener("click", function(e) {
    e.stopPropagation();
  });

  function addEventListenerByClass(className, event, fn) {
    var list = document.getElementsByClassName(className);
    for (var i = 0, len = list.length; i < len; i++) {
      list[i].addEventListener(event, fn, false);
    }
  }
  function donateClick(e) {
    e.preventDefault();
    var amount = e.target.innerHTML.match(/\d+/)[0];
    // gtag('event', 'Donate £'+amount+' Click', {
    //   'event_category': 'Popup',
    //   'event_label': 'Variant ' + variant
    // });
    ga('send', 'event', 'Popup', 'Donate £'+amount+' Click', 'Variant ' + variant);
    if(e.which === 2) {
      window.open(e.target.href, '_blank');
    } else if(e.which === 1) {
      window.location.href = e.target.href;
    }
  }
  addEventListenerByClass('button', 'click', donateClick);
  addEventListenerByClass('button', 'auxclick', donateClick);


  modalOverlay.classList.remove('hide');
  setCookie('repPopup', true, 3);
}
var repVariant = getCookie('repVariant');
if (!repVariant) {
  var userVariant = getVariant();
  // gtag('event', 'Visit', {
  //   'event_category': 'Popup',
  //   'event_label': 'Variant ' + userVariant
  // });
  setTimeout(function() {
    ga('send', 'event', 'Popup', 'Visit', 'Variant ' + userVariant);
  }, 1000);
  setCookie('repVariant', userVariant, 365);
  variant = userVariant;
  checkCookie(userVariant);
} else {
  // gtag('event', 'Visit', {
  //   'event_category': 'Popup',
  //   'event_label': 'Variant ' + repVariant
  // });
  setTimeout(function() {
    ga('send', 'event', 'Popup', 'Visit', 'Variant ' + repVariant);
  }, 1000);
  variant = repVariant;
  checkCookie(repVariant);
}

// Homepage edits
$('.surnav .topnav_block.secnav.last').before('<li class="topnav_block secnav"><a href="https://act.reprieve.org.uk/page/contribute/make-a-donation?source=rukhome" target="_blank" class="topnav_element secnav">Donate</a></li>');

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

if (document.getElementById("countdown-container")) {
  
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
}
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
