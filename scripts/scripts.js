// JavaScript Document
$(document).ready(function() {



	$('.imagePane').hide();
	$('.imagesThree').show();
	
	// Jpanel menu and extra credit to slow down the duration of opening and closing jPanel
var jPM = $.jPanelMenu({
    menu: '#menu',
    trigger: '.menu-trigger',
    duration: 500
});

jPM.on();

// challenge one
$('.menu-trigger').click(function (){
   $('.menu-trigger').css('color', 'gray');
   
			
	});	
	
$('.menu-trigger').mouseover(function (){
   $('.menu-trigger').css('color', 'black');
});


	
// Button Fuctionality

$( 'li i').hide(); //extra credit icon by jpanel

$('li.friends').click(function() {
	$( 'li i').hide();
   $('.imagePane').fadeOut().delay(400);
	$('.imagesFive').fadeIn();
	$( 'li.friends i').show();
});

$('li.rest').click(function() {
	$( 'li i').hide();
   $('.imagePane').fadeOut().delay(400);
	$('.imagesFour').fadeIn();
	$( 'li.rest i').show();
});

$('li.drive').click(function() {
	$( 'li i').hide();
   $('.imagePane').fadeOut().delay(400);
	$('.imagesThree').fadeIn();
	$( 'li.drive i').show();
});

$('li.flowers').click(function() {
	$( 'li i').hide();
   $('.imagePane').fadeOut().delay(400);
	$('.imagesTwo').fadeIn();
	$( 'li.flowers i').show();
});

$('li.street').click(function() {
	$( 'li i').hide();
   $('.imagePane').fadeOut().delay(400);
	$('.imagesOne').fadeIn();
	$( 'li.street i').show();
});


});

