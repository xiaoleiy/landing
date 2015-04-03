// --------------------------------------------------------
// Pretty Photo for Lightbox Image
// -------------------------------------------------------- 
$(document).ready(function() {	
    $("a[data-gal^='prettyPhoto']").prettyPhoto(); 
});

// --------------------------------------------------------
//	Navigation Bar
// -------------------------------------------------------- 	
$(window).scroll(function(){	
	"use strict";	
	var scroll = $(window).scrollTop();
	if( scroll > 60 ){		
		$(".navbar").addClass("scroll-fixed-navbar");				
	} else {
		$(".navbar").removeClass("scroll-fixed-navbar");
	}
});

// --------------------------------------------------------
//	Smooth Scrolling
// -------------------------------------------------------- 	
$(".navbar-nav li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000);
});

// --------------------------------------------------------
//	Users Login & Registration
// --------------------------------------------------------
(function() {
   var username = document.getElementById('username');
   var password = document.getElementById('password');

   username.addEventListener('keyup', function (event) {
	   if (username.validity.valueMissing || username.validity.patternMismatch) {
		   username.setCustomValidity('请输入字母数字组合的用户名或Email地址');
	   }
   });

   password.addEventListener('keyup', function (event) {
	   if (username.validity.valueMissing) {
		   username.setCustomValidity('请输入密码');
	   }
   });
})();
