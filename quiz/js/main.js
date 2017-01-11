( function($) {
	//Creating the answers array
	var answers = [];
	var correctanswerscount = 0;
	var totalquestioncount = 0;

	//Doucment ready function where events gets binded in
	$( document ).ready(function() {
			//Focus input only on Desktop
			if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 				document.getElementById("introname").focus();
			}

	    initialiseButtonClicks();
	    //Function which calls the name and email and passes to the donation page
	    getName();

	    $(".bsd-signup-61").on("submit", function(e){
	    	// validateform();
	    	$("#emailerror").remove();
				$("#nameerror").remove();
		  	if (!validateEmail($("#email").val())) {
					$("#bsd-field-email").append(("<div id='emailerror' class='error'>Please enter email</div>"));
					e.stopImmediatePropagation();
					return false;
				}
		  	else if($("#firstname").val()==''){
				$("#bsd-field-firstname").append(("<div id='nameerror' class='error'>Please enter firstname</div>"));
		  		e.stopImmediatePropagation();
		  		return false;
		  	}
		});
	});

	// Initialising button click
	function initialiseButtonClicks(){
		$('.js-button').on('click', function(e) {
				e.stopPropagation();
				e.preventDefault();
			// Check whether it is the first question and scroll to the question
				checkfirstquestion(this);
			// Lock the editable option
				lockselectedanswer(this);
			// Populate the correct answer
				calculatecorrectanswer(this);
			// Show the correct answer
				showcorrectanswer(this);
			// Store the answer
				storeanswer(this);
	  	// Scroll to the answer
		  	scrollToanswer(this);
		});

		$('.js-next-button').on('click', function(e) {
			// Show the next question
			showNextQuestion(this);
			// Scroll to the next question
			scrollToNextQuestion(this);
		});

		$('.js-score-button').on('click', function(e) {
			// Get the score and display it
	  		showscore(this);
		});

		$("#facebookShareLink").on("click",function(){
    	// var fbpopup = window.open("https://www.facebook.com/sharer/sharer.php?u=https://reprieve.bsd.net/page/s/what-are-the-books-banned-in-camp-guantanamo&t=TEst", "pop", "width=600, height=400, scrollbars=no");
    	// return false;
    	var fbtext = "I got "+correctanswerscount+" out of "+totalquestioncount+". Take the quiz";
    	FB.ui({
				method: 'feed',
				link: 'https://reprieve.bsd.net/page/s/what-are-the-books-banned-in-camp-guantanamo',
				caption: fbtext,
			}, function(response){});
		});

		$("#twitterShareLink").on("click",function(){
				var tweettext = "I got "+correctanswerscount+" out of "+totalquestioncount+". Take the quiz. https://reprieve.bsd.net/page/s/what-are-the-books-banned-in-camp-guantanamo";
	    	var tweetpopup = window.open("https://twitter.com/intent/tweet?text="+tweettext, "pop", "width=600, height=400, scrollbars=no");
	    	return false;
		});

		$('.js-start-quiz-button').on('click', function(e) {
			startquiz(this);
		});

		$(".intro-block input").focus(function(){
			if($(this).val().length === 0 && !$(this).hasClass("active")){
				$(this).addClass("active");
				$(this).parent().addClass("no-before");
			}
		});

		$(".intro-block input").focusout(function() {
			if($(this).val().length === 0 && $(this).hasClass("active")){
		    	$(this).removeClass("active");
		    	$(this).parent().removeClass("no-before");
			}
		});
	}

	//Creates a overlay on top of the answered question
	function lockselectedanswer(obj){
		$(obj).find("input").prop("checked", true);
		$(obj).parents('.js-answer-wrapper').append("<div class='overlay'></div>");
	}

	function calculatecorrectanswer(obj){
		//Defining the message
		var message = '';
		var addclass= '';

		//Adding the total count
		totalquestioncount = totalquestioncount + 1 ; 

		//If the selected answer is correct
		if($(obj).hasClass("js-correct-answer")){
			$(obj).css({"background": "#88F078"});
			correctanswerscount = correctanswerscount + 1 ;
			message = '<i class="fa fa-check-circle" aria-hidden="true"></i> You got it right!';
			addclass = 'js-right';
		}
		// else highlight the correct answer as green and show the selected as red
		else{
			$(obj).parent().find('.js-correct-answer').css({"background": "#88F078"});
			$(obj).css({"background": "#FF7775"});
			$(obj).addClass("js-wrong-answer");
			message = '<i class="fa fa-times-circle" aria-hidden="true"></i> Sorry, wrong answer';
			addclass = 'js-wrong';
		}

		var ansmessage = $(obj).parents('.js-answer-wrapper').nextAll("div.js-show-answer:first").find('p.js-ans-message');
		$(ansmessage).html(message);
		$(ansmessage).addClass(addclass);
	}

	// loops through html and removes the next div with class js-show-answer:first and shows it to the user.
	//This will be the answer to the question user had just answered.
	function showcorrectanswer(obj){
		var answerDiv = $(obj).parents('.js-answer-wrapper').nextAll("div.js-show-answer:first");
		if(answerDiv.length){
			$(answerDiv).removeClass("js-hide-answer");
		}
	}

	//Scrolls to the answer when the question is been answered
	function scrollToanswer(obj){
		var answerDiv = $(obj).parents('.js-answer-wrapper').nextAll("div.js-show-answer:first");
		if(answerDiv.length){
			$(window).scrollTo($(answerDiv), 800);
		}
	}

	// Shows the next Question to the user once user had answered the previous question
	function showNextQuestion(obj){
		var nextSlide = $(obj).parents('.js-question-container').nextAll("div.js-question-container:first");
		if(nextSlide.length){
			$(nextSlide).removeClass("js-hide");
			// $(window).scrollTo($(nextSlide), 5000);
		}
	}

	//Stores the answer's User posted into an array 
	function storeanswer(obj){
		var questionvalue = $(obj).data('question');
		var answervalue = $(obj).data('ans');
		answers.push({
			key: questionvalue,
	    	value: answervalue
		});
		var myval = JSON.stringify(answers);
	}

	function scrollToNextQuestion(obj){
		var nextSlide = $(obj).parents('.js-question-container').nextAll("div.js-question-container:first");
		if(nextSlide.length){
			$(window).scrollTo($(nextSlide), 800);
		}
	}

	function showscore(obj){
		var nextSlide = $(obj).parents('.js-question-container').nextAll("div.js-question-container:first");
		var scoreslide = $(obj).parents('.js-question-container').nextAll("div.js-final-score-container:first");
		//If there are no more questions then show the answer and social share links
		if(!nextSlide.length){
			//Adding the score also to the JSON File
			answers.push({
				key: 'correctanswers',
	    	value: correctanswerscount
			});

			console.log(answers);
			//Update the BSD form with the results
			$('textarea[name=custom-892]').val(JSON.stringify(answers));
			console.log(JSON.stringify(answers));
			$("#myscore").html(correctanswerscount);
			$("#totalscore").html(totalquestioncount);

			var resultmessage = 'Nice Try!';

			if(correctanswerscount >= 7){
				resultmessage = 'Well done!';
			}
			$("#resultmessage").html(resultmessage);

			$(scoreslide).removeClass("js-hide");
			$(window).scrollTo($(scoreslide), 800);
		}
	}

	function checkfirstquestion(obj){
		var firstSlide = $(obj).parents('.js-question-container').hasClass("js-first-question");
		if(firstSlide){
			$(window).scrollTo($('.js-question-container'), 800);
		}
	}

	function startquiz(obj){
		if ($('.js-intro-container input').val() != "") {
			var firstname = $('.js-intro-container input').val();
			$("#firstname").val(firstname);
			$("#fname").html(firstname);
      var firstSlide = $(obj).parents('.js-intro-container').nextAll("div.js-question-container.js-first-question");
			if(firstSlide){
				$(firstSlide).removeClass("js-hide");
				$(window).scrollTo($('.js-question-container'), 800);
			}
    } else {
      // error, please enter first name
      $('.missing-firstname').show();
    }

	}

	function getName(){
		if (window.BSDTracker && BSDTracker.signup) {
			var email = BSDTracker.signup.get('email');
			var fname = BSDTracker.signup.get('firstname');
			updateDonateLink(email , fname);
		}
	}

	function updateDonateLink(email , fname){
		$('#donate-btn').attr('href','https://reprieve.bsd.net/page/contribute/Guantanamo-Anniversary-Donate?email='+email+"&firstname="+fname);
	}

	//Validate email in Javascript
	function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
	}

	// function validateform(){
	// 	$("#emailerror").remove();
	// 	$("#nameerror").remove();
 //  	if (!validateEmail($("#email").val())) {
	// 		$("#bsd-field-email").append(("<div id='emailerror' class='emailerror'>Please fill email</div>"));
	// 		e.preventDefault();
	// 	}
 //  	else if($("#firstname").val()==''){
	// 			$("#bsd-field-firstname").append(("<div id='nameerror' class='error'>Please fill firstname</div>"));
 //  		e.preventDefault();
 //  	}
	// }

} ) ( jQuery );