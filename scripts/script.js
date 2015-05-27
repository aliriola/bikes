// JavaScript Document

$(document).ready(function() {
	
	$('.imagePane').hide();
	$('.three').fadeIn();
	
// Button Fuctionality
$('li.imageFive').click(function() {
   $('.imagePane').fadeOut().delay(400);
	$('.five').fadeIn();
});

$('li.imageFour').click(function() {
   $('.imagePane').fadeOut().delay(400);
	$('.four').fadeIn();
});

$('li.imageThree').click(function() {
   $('.imagePane').fadeOut().delay(400);
	$('.three').fadeIn();
});

$('li.imageTwo').click(function() {
   $('.imagePane').fadeOut().delay(400);
	$('.two').fadeIn();
});

$('li.imageOne').click(function() {
   $('.imagePane').fadeOut().delay(400);
	$('.one').fadeIn();
});


/* =Shadow Nav
	-------------------------------------------------------------------------- */
	
		// Append shadow image to each LI
		
		$("#navMenu2 li").append('<img class="shadow" src="images/icons-shadow.png" width="81" height="27" alt="" />');
	
		// Animate buttons, shrink and fade shadow
		
		$("#navMenu2 li").hover(function() {
			var e = this;
		    $(e).find("a").stop().animate({ marginTop: "-20px" }, 250, function() {
		    	$(e).find("a").animate({ marginTop: "-15px" }, 250);
		    });
		    $(e).find("img.shadow").stop().animate({ width: "80%", height: "20px", marginLeft: "8px", opacity: 0.25 }, 250);
		},function(){
			var e = this;
		    $(e).find("a").stop().animate({ marginTop: "4px" }, 250, function() {
		    	$(e).find("a").animate({ marginTop: "0px" }, 250);
		    });
		    $(e).find("img.shadow").stop().animate({ width: "100%", height: "27px", marginLeft: "0", opacity: .50 }, 250);
	
	
		});
						
	$('#home2').hover(function() {
		$('#home2').stop().animate({ marginTop: "-20px" }, 250, function() {
			$('#home2').animate({ marginTop: "-15px" }, 250);
			
		});

	});
}); // ends Jquery