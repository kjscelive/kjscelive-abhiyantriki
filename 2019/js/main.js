$(document).ready(function() {
    $menuLeft = $('.pushmenu-left');
    $nav_list = $('.ham_click');
    
    $nav_list.click(function() {
      $(this).toggleClass('active');
      $('.pushmenu-push').toggleClass('pushmenu-push-toright');
      $menuLeft.toggleClass('pushmenu-open');
    });
  });



$(".events").hover(function(){
  $('.expo-drop').toggleClass('show-drop', 800, "easeOutQuint");
})


$(".mobo-dropdown").click(function(){
  $('.drop-content').toggleClass('show-drop');
})

// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});