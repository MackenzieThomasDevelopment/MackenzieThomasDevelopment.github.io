$(document).ready(function(){

/* NAV SCROLLS */
$(".scrollExpertise").click(function() {
  $('html, body').animate({
      scrollTop: $(".pageThree").offset().top
  }, 1000);
});

$(".scrollAbout").click(function() {
  $('html, body').animate({
      scrollTop: $(".pageTwo").offset().top
  }, 1000);
});

$(".scrollProjects").click(function() {
  $('html, body').animate({
      scrollTop: $(".pageFour").offset().top
  }, 1000);
});

$(".scrollConnect").click(function() {
  $('html, body').animate({
      scrollTop: $(".pageFive").offset().top
  }, 1000);
});
  $("#siteButton").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
});

$('button').click(function() {
  $(this).toggleClass('expanded').siblings('div').slideToggle();
});

$("#downArrow").click(function() {
  $('html, body').animate({
      scrollTop: $(".pageTwo").offset().top
  }, 800);
});


// Social toggle
$('#social-click').click(function(){
  $('.social-icon').toggle( 'slide' );
});

$('.navigation-toggle').on('click',function() {

  if($('.navigation-target').hasClass('clicked')){
    $('.navigation-target').removeClass('clicked');
    $('.dropdown-menu').slideUp();
  }
  else{
    $('.navigation-target').addClass('clicked');
    $('.dropdown-menu').slideDown();
  }
});

});

//hamburger
jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');
 
        e.preventDefault();
    });