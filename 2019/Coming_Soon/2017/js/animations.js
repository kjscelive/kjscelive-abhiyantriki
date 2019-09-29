// var interval = setInterval(function() {
//     if(document.readyState === 'complete') {
//      var loader = document.getElementById('loader');
//       loader.style.display = 'none';
//         clearInterval(interval);
//         done();
//     }
// }, 10000);

$("#myCarousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});

$("#carousel-example-generic").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});


$('.circle-plus').on('click', function(){
  $(this).toggleClass('opened');
  // if ($(this).hasClass('closed')) {
  //   $(this).removeClass('closed').addClass('opened');
  // } else {
  //   $(this).removeClass('opened').addClass('closed');
  // }
})
$('.circle-plus').click(function(){
        $('#home').toggleClass('on');
});
$('.circle-plus').click(function(){
        $('#menu1').toggleClass('on');
});
$('.circle-plus').click(function(){
        $('body').toggleClass('on');
});

$('#myNavbar').click(function(){
$( "#myNavbar ul .active" ).each(function( index ) {
  // alert( $( this ).text() );
  if( $( this ).text()=="CONTACT" && $('.circle-plus').hasClass('opened'))
  {
    // alert("works");
    $('.circle-plus').click();
    // $('#home').toggleClass('on');
    // $('#menu1').toggleClass('on');
  }
});
});

// alert("Connected!")
const mq = window.matchMedia( "(min-width: 992px)" );
if(mq.matches){
  // Animation forsection 2 fade in
  $(function() {
  $('#section2').hover(function() {
      $('.section > .section_image2').fadeIn();
  }, function() {
      $('.section > .section_image2').fadeOut();
  });
  });

  // for section 3 fade in
  $(function() {
  $('#section3').hover(function() {
      $('.section > .section_image3').fadeIn();
  }, function() {
      $('.section > .section_image3').fadeOut();
  });
  });
}
// Animation for sparrow, smooth scroll to top
if ($('#back-to-top').length) {
    var scrollTrigger = 1500, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

// For smooth scroll-
$("#myNavbar ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top-50
     }, 1000, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});
// $(document).ready(function() {
// $("body").sectionsnap({
// // time dilay (ms)
// 'delay': 0,

// // selector
// 'selector': ".section",

// // % of window height from which we start
// 'reference': .9,

// // animation time (snap scrolling)
// 'animationTime': 600,

// // offset top (no snap before scroll reaches this position)
// 'offsetTop': 0,

// // offset bottom (no snap after bottom - offsetBottom)
// 'offsetBottom': 0
// });
// });
/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/

// Carousel Animations
(function( $ ) {

  //Function to animate slider captions
  function doAnimations( elems ) {
    //Cache the animationend event in a variable
    var animEndEv = 'webkitAnimationEnd animationend';

    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data('animation');
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }

  //Variables on page load
  var $myCarousel = $('#carousel-example-generic'),
    $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

  //Initialize carousel
  $myCarousel.carousel();

  //Animate captions in first slide on page load
  doAnimations($firstAnimatingElems);

  //Pause carousel
  $myCarousel.carousel('pause');


  //Other slides to be animated on carousel slide event
  $myCarousel.on('slide.bs.carousel', function (e) {
    var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
  });

})(jQuery);

$(document).ready(function () {
    $('.carousel').carousel({
        interval: 500
    });

    $('.carousel').carousel('cycle');
});
// ---------------------------------------------------------
/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/
(function( $ ) {

    //Function to animate slider captions
    function doAnimations( elems ) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load
    var $myCarousel = $('#myCarousel'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

    //Initialize carousel
    $myCarousel.carousel();

    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);

    //Pause carousel
    $myCarousel.carousel('pause');


    //Other slides to be animated on carousel slide event
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });

})(jQuery);
