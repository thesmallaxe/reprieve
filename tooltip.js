// JD utility functions
var getJSON = function(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    var data;
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            data = request.responseText;
            data = JSON.parse(data);
            // do stuff with data
            callback(data);
        } else {
            console.log('reached server but returned error');
        }
    };

    request.onerror = function() {
        console.log('connection error');
    };

    request.send();
};

function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}


// rest of Reprieve JS, with JD edits

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
    for (var i = 0; i < ca.length; i++) {
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
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkCookie(variant) {
    var cookie = getCookie('repPopup');
    if (!cookie) {
        if (variant == 1) {
            // Add Modal css
            document.head.innerHTML += '<style>.modal_overlay *, .modal_overlay *:before, .modal_overlay *:after { box-sizing: border-box; } .modal_overlay { font-family: "effra","Helvetica Neue",helvetica,arial,sans-serif; display: block; position: fixed; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.4); overflow: auto; z-index: 99999; transition: opacity .35s; color: #252728; } .modal_overlay.hide { opacity: 0; pointer-events: none; transition: opacity .25s; } .modal_overlay .modal { margin: 100px auto; width: 100%; max-width: 620px; background-color: #f2f0ed; padding: 30px; position: relative; height: auto; } .modal_overlay .modal p { margin-bottom: 18px; font-size: 18px; line-height: 1.4; font-family: "Source Sans Pro",arial,sans-serif; } .modal_button_wrap { text-align: center; } .modal_button_wrap .button { background: #e35e14; border: solid 2px #e35e14; border-radius: 3px; color: #fff; min-width: 190px; margin: 5px; display: inline-block; padding: 10px; text-align: center; text-decoration: none !important; font-size: 18px; transition: all .1s ease-out; } .modal_button_wrap .button:hover { border: 2px solid #e35e14; color: #e35e14; background: none; } .modal h1 { font-size: 2.2rem; margin-bottom: 25px; margin-top: 0; padding-right: 40px; line-height: 1.3; } .modal h1 span{ border-bottom: 4px solid #e35e14; display: inline; padding-bottom: 2px; } #close-modal { position: absolute; top: 30px; right: 30px; width: 30px; height: 30px; line-height: 18px; font-size: 26px; text-align: center; padding: 0; border: 0; border-radius: 50%; cursor: pointer; background: #f2f0ed; transition: all .1s; } #close-modal:hover { color: #e35e14; } @media only screen and (max-width: 500px) { .modal_overlay .modal { padding: 20px; } #close-modal { top: 20px; right: 20px; } } @media only screen and (max-width: 420px) { .modal h1 { font-size: 1.8rem; } }</style>';
            // Add modal html
            document.body.innerHTML += '<div class="modal_overlay hide" id="modal_overlay"> <div class="modal" id="modal"> <button id="close-modal">&times;</button> <h1><span>An urgent message:</span></h1> <p> At Reprieve, we often have to act quickly to save lives - but we can\'t do it without your support. By making a regular donation, you can help us be ready to defend people from torture, imprisonment or execution at a moment\'s notice. <strong>Could you give a few pounds a month to support victims of extreme human rights abuses? Start a regular donation now - it takes three minutes:</strong> </p> <div class="modal_button_wrap"> <a href="https://secure.edirectdebit.com/Reprieve/Donate2/Desktop-Form-Page/?ref=homepage_popup_variant_1&amount=5" class="button">£5 per month</a><a href="https://secure.edirectdebit.com/Reprieve/Donate2/Desktop-Form-Page/?ref=homepage_popup_variant_1&amount=8" class="button">£8 per month</a><a href="https://secure.edirectdebit.com/Reprieve/Donate2/Desktop-Form-Page/?ref=homepage_popup_variant_1&amount=10" class="button">£10 per month</a><a href="https://secure.edirectdebit.com/Reprieve/Donate2/Desktop-Form-Page/?ref=homepage_popup_variant_1&amount=20" class="button">£20 per month</a> </div> </div> </div>';

            modalStuff();
        } else if (variant == 2) {
            // Add Modal css
            document.head.innerHTML += '<style>.modal_overlay *, .modal_overlay *:before, .modal_overlay *:after { box-sizing: border-box; } .modal_overlay { font-family: "effra","Helvetica Neue",helvetica,arial,sans-serif; display: block; position: fixed; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.4); overflow: auto; z-index: 99999; transition: opacity .35s; color: #252728; } .modal_overlay.hide { opacity: 0; pointer-events: none; transition: opacity .25s; } .modal_overlay .modal { margin: 100px auto; width: 100%; max-width: 620px; background-color: #f2f0ed; padding: 30px; position: relative; height: auto; } .modal_overlay .modal p { margin-bottom: 18px; font-size: 18px; line-height: 1.4; font-family: "Source Sans Pro",arial,sans-serif; } .modal_button_wrap { text-align: center; } .modal_button_wrap .button { background: #e35e14; border: solid 2px #e35e14; border-radius: 3px; color: #fff; min-width: 190px; margin: 5px; display: inline-block; padding: 10px; text-align: center; text-decoration: none !important; font-size: 18px; transition: all .1s ease-out; } .modal_button_wrap .button:hover { border: 2px solid #e35e14; color: #e35e14; background: none; } .modal h1 { font-size: 2.2rem; margin-bottom: 25px; margin-top: 0; padding-right: 40px; line-height: 1.3; } .modal h1 span{ border-bottom: 4px solid #e35e14; display: inline; padding-bottom: 2px; } #close-modal { position: absolute; top: 30px; right: 30px; width: 30px; height: 30px; line-height: 18px; font-size: 26px; text-align: center; padding: 0; border: 0; border-radius: 50%; cursor: pointer; background: #f2f0ed; transition: all .1s; } #close-modal:hover { color: #e35e14; } @media only screen and (max-width: 500px) { .modal_overlay .modal { padding: 20px; } #close-modal { top: 20px; right: 20px; } } @media only screen and (max-width: 420px) { .modal h1 { font-size: 1.8rem; } }</style>';
            // Add modal html
            document.body.innerHTML += '<div class="modal_overlay hide" id="modal_overlay"> <div class="modal" id="modal"> <button id="close-modal">&times;</button> <h1><span>Will you join us?</span></h1> <p> Reprieve is a community of people connected by a shared belief in justice and human rights. Together, we defend men and women facing execution, torture and unlawful detention around the world. <strong>Will you join us by becoming a regular supporter?</strong> </p> <div class="modal_button_wrap"> <a href="https://secure.edirectdebit.com/Reprieve/Donate2/Desktop-Form-Page/?ref=homepage_popup_variant_2&amount=5" class="button">£5 per month</a><a href="https://secure.edirectdebit.com/Reprieve/Donate2/Desktop-Form-Page/?ref=homepage_popup_variant_2&amount=8" class="button">£8 per month</a><a href="https://secure.edirectdebit.com/Reprieve/Donate2/Desktop-Form-Page/?ref=homepage_popup_variant_2&amount=10" class="button">£10 per month</a><a href="https://secure.edirectdebit.com/Reprieve/Donate2/Desktop-Form-Page/?ref=homepage_popup_variant_2&amount=20" class="button">£20 per month</a> </div> </div> </div>';

            modalStuff();
        }

        setCookie('repPopup', true, 3);

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
        ga('send', 'event', 'Popup', 'Donate £' + amount + ' Click', 'Variant ' + variant);
        if (e.which === 2) {
            window.open(e.target.href, '_blank');
        } else if (e.which === 1) {
            window.location.href = e.target.href;
        }
    }
    addEventListenerByClass('button', 'click', donateClick);
    addEventListenerByClass('button', 'auxclick', donateClick);


    modalOverlay.classList.remove('hide');
    
}

function addGDPRPopup(graphData) {

    var cookie = getCookie('gdprPopup');
    if (!cookie) {

        // only show popup if they're not in gdpr group
        if (!graphData['group_gdpr_total']) {

            // Add Modal css
            document.head.innerHTML += '<style>.modal_overlay *, .modal_overlay *:before, .modal_overlay *:after { box-sizing: border-box; } .modal_overlay { font-family: "effra","Helvetica Neue",helvetica,arial,sans-serif; display: block; position: fixed; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.4); overflow: auto; z-index: 99999; transition: opacity .35s; color: #252728; } .modal_overlay.hide { opacity: 0; pointer-events: none; transition: opacity .25s; } .modal_overlay .modal { margin: 100px auto; width: 100%; max-width: 620px; background-color: #f2f0ed; padding: 30px; position: relative; height: auto; } .modal_overlay .modal p { margin-bottom: 18px; font-size: 18px; line-height: 1.4; font-family: "Source Sans Pro",arial,sans-serif; } .modal_button_wrap { text-align: center; } .modal_button_wrap .button, #modal_overlay .submit-button { background: #e35e14; border: solid 2px #e35e14; border-radius: 3px; color: #fff; min-width: 190px; display: inline-block; padding: 10px; text-align: center; text-decoration: none !important; font-size: 18px; transition: all .1s ease-out; } .modal_button_wrap .button:hover, #modal_overlay .submit-button:hover { border: 2px solid #e35e14; color: #e35e14; background: none; } .modal h1 { font-size: 2.2rem; margin-bottom: 25px; margin-top: 0; padding-right: 40px; line-height: 1.3; } .modal h1 span{ border-bottom: 4px solid #e35e14; display: inline; padding-bottom: 2px; } #close-modal { position: absolute; top: 30px; right: 30px; width: 30px; height: 30px; line-height: 18px; font-size: 26px; text-align: center; padding: 0; border: 0; border-radius: 50%; cursor: pointer; background: #f2f0ed; transition: all .1s; } #close-modal:hover { color: #e35e14; } .modal_overlay .fieldset{margin-bottom: 17px;}.modal_overlay label{font-weight: bold !important; font-size: 18px; color: #252728; font-family: "Source Sans Pro",arial,sans-serif !important; display: block;}.modal_overlay .label{padding: 0px 0 6px 0; display: block;}.modal_overlay input[type="text"],.modal_overlay input[type="email"]{color: #252728; font-family: "Source Sans Pro",arial,sans-serif !important; -webkit-appearance: none; font-size: 18px; border: solid 2px #ceccc9; padding: 10px; transition: all .1s ease-out; width: 100%; box-sizing: border-box;}.modal_overlay input[type="text"]:hover,.modal_overlay input[type="email"]:hover{border: 2px solid #e35e14;}.modal_overlay select{background: white; font-family: "Source Sans Pro",arial,sans-serif; border: 2px solid #ceccc9; margin-right: 10px; min-width: 25%; padding: 10px 15px; display: block; -webkit-appearance: none; -webkit-border-radius: 0px; background-position: 95% 50%; float: none; margin: none; margin-bottom: 0px; width: 100%; font-size: 18px;}.modal_overlay .input input[type=checkbox]{float: left; width: 14px; height: 16px; padding: 0; margin: 0; margin-right: 6px; position: relative; top: 4px;}.modal_overlay label[for="email_opt_in"]{line-height: 1.3;} .modal_overlay input[type="radio"] {margin: 4px 5px 0 0 !important; float: left; margin-right: 6px; font-size: 18px;}.modal_overlay .radio-label { position: relative; bottom: 0; font-weight: 300 !important;} .modal_overlay a {    text-decoration: none;color: #e35e14 !important; font-weight: normal; } #gdpr-form, #modal {transition: height 2sec;} .signup-thanks{display:none;} @media only screen and (max-width: 500px) { .modal_overlay .modal { padding: 20px; } #close-modal { top: 20px; right: 20px; } } @media only screen and (max-width: 420px) { .modal h1 { font-size: 1.8rem; } }</style>';
            // Add modal html
            document.body.innerHTML += '<div class="modal_overlay hide" id="modal_overlay"> <div class="modal" id="modal"> <button id="close-modal">&times;</button> <h1 class="signup-cta"><span>Your email can save lives</span></h1><h1 class="signup-thanks"><span>Thank you</span></h1><p class="signup-cta">Enter your email and we\'ll update you on urgent cases so you can defend men, women and children facing execution, torture and illegal detention.</p><p class="signup-thanks">Thanks so much for joining Reprieve. We\'ll be in touch soon to tell you about our campaigns and how you can support our life-saving work.</p><form id="gdpr-form" method="post" action="https://act.reprieve.org.uk/page/s/gdpr-popup"><div class="fieldset" id="bsd-field-country"><div class="input"><select id="popup-country" name="country"><option value=""></option><option value="AF">Afghanistan</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BR">Brazil</option><option value="VG">British Virgin Islands</option><option value="IO">British Indian Ocean Territory</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CO">Colombia</option><option value="KM">Comoros Islands</option><option value="CD">Congo, Democratic Republic of the</option><option value="CG">Congo, Republic of the</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="CI">Cote D\'ivoire</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="TP">East Timor</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands (Malvinas)</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="VA">Holy See (Vatican City State)</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Republic of Ireland</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KR">South Korea</option><option value="XK">Kosovo</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macau</option><option value="MK">Macedonia</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova, Republic of</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="AN">Netherlands Antilles</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn Island</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russian Federation</option><option value="RW">Rwanda</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">Sao Tome and Principe</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SH">St. Helena</option><option value="PM">St. Pierre and Miquelon</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SY">Syria</option><option value="SZ">Swaziland</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB" selected="selected">United Kingdom</option><option value="US">United States</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VE">Venezuela</option><option value="VN">Viet Nam</option><option value="VI">Virgin Islands (U.S.)</option><option value="WF">Wallis and Futuna Islands</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option></select></div></div><div class="fieldset" id="bsd-field-email"><div class="input"><input type="email" class="text" size="48" id="popup-email" name="email" placeholder="Email" required></div></div><div class="fieldset" id="bsd-field-firstname"><div class="input"><input size="16" id="popup-firstname" name="firstname" type="text" placeholder="First Name" required></div></div><div class="fieldset" id="bsd-field-lastname"> <div class="input"><input size="25" id="popup-lastname" placeholder="Last Name" name="lastname" type="text" value="" required></div></div><div class="fieldset" id="bsd-field-gdpr-radios-group"><div class="label"><label class="field">Would you like to receive updates about our news, campaigns and appeals by email?<a href="http://www.reprieve.org.uk/privacy/"> (See our privacy policy)</a></label></div><div class="input"><input id="gdpr-radios_0" class="gdpr-radios" name="gdpr-radios" value="Yes" type="radio"><label class="radio-label" for="gdpr-radios_0">Yes<br></label><input id="gdpr-radios_1" class="gdpr-radios" name="gdpr-radios" value="No" type="radio"><label class="radio-label" for="gdpr-radios_1">No<br></label></div></div><input style="display:none;" id="popup-email_opt_in" name="email_opt_in" type="checkbox" value="1" checked="checked"><button class="submit-button" type="submit">Submit</button></form></div></div>';

                
                document.getElementById('gdpr-radios_0').addEventListener("change", function() {
                    if ( document.getElementById('gdpr-radios_0').checked ) {
                        document.getElementById("popup-email_opt_in").checked = true;
                    }                
                });

                document.getElementById('gdpr-radios_1').addEventListener("change", function() {
                    if ( document.getElementById('gdpr-radios_1').checked ) {
                        document.getElementById("popup-email_opt_in").checked = false;
                    }
                });

                var form = document.getElementById('gdpr-form');

                // Append the form status
                var formStatus = document.createElement('div');
                formStatus.setAttribute('class', 'form-status alert');
                form.appendChild(formStatus);

                form.onsubmit = function (e) {
                    e.preventDefault();

                    // Collect the form data while iterating over the inputs
                    var data = {};
                    for (var i = 0, ii = form.length; i < ii; ++i) {
                        var input = form[i];
                        if (input.name) {
                            data[input.name] = input.value;
                        }
                    }



                    // Construct an HTTP request
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', 'https://act.reprieve.org.uk/page/s/gdpr-popup', true);
                    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                    

                    // Send the collected data as JSON
                    // need to serialize form data here then post
                    var dataObj = {
                        country: document.getElementById('popup-country').value,
                        email: document.getElementById('popup-email').value,
                        firstname: document.getElementById('popup-firstname').value,
                        lastname: document.getElementById('popup-lastname').value,
                        email_opt_in: document.getElementById("popup-email_opt_in").checked ? 1 : 0
                    }

                    var data = 'country=' + dataObj.country + '&email=' +dataObj.email + '&firstname=' +dataObj.firstname + '&lastname=' +dataObj.lastname + '&email_opt_in=' +dataObj.email_opt_in;
                    xhr.send(data);
                    xhr.onreadystatechange = function () {

                        document.getElementById('gdpr-form').style.display ='none';
                        document.getElementsByClassName('signup-cta')[0].style.display ='none';
                        document.getElementsByClassName('signup-cta')[1].style.display ='none';
                        document.getElementsByClassName('signup-cta')[2].style.display ='none';
                        document.getElementsByClassName('signup-thanks')[0].style.display = 'block';
                        document.getElementsByClassName('signup-thanks')[1].style.display = 'block';
                        /*
                        setTimeout(function(){
                            fadeOut(document.getElementById('modal_overlay'));
                        }, 3000);
                        */
                    };
            
                   
                };
                
            modalStuff();

            setCookie('gdprPopup', true, 7);

        } else {
            // already in gdpr group, show donate popup instead
            runDonatePopup();
        }

    }

};


function runDonatePopup() {
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

}



// JD: Add gdpr popup to page here
if (getCookie('domainGUID')) {
    getJSON('https://reprieve-cookie.appspot.com/loe.php?guid=' + getCookie('domainGUID'), addGDPRPopup);
} else {
    // no guid, still show GDPR popup (pass empty object so if statement runs)
    addGDPRPopup({});
}

// Homepage edits
$('.surnav .topnav_block.secnav.last').before('<li class="topnav_block secnav"><a href="https://act.reprieve.org.uk/page/contribute/donatenow-sl?source=rukhome" target="_blank" class="topnav_element secnav">Donate</a></li>');

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

if (document.getElementById("g16")) {
    $(".section_header").addClass("fullwide");
    $(".surcore").addClass("surcore-full");
    $(".primary h1:nth-of-type(1)").addClass("fullwide-center");

}
