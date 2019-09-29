var current = $('.current li');
var arrow_up = $('up-arrow');
var arrow_down = $('down-arrow');
var disp = "flex";
var offset_s = $(window).height()*0.1;
var nav;



function show_nav(new_curr){

      current.css("display","none");
      current = new_curr;
      current.css("display","block");
}

function goDown(){
   if (scrollT < 0) scrollT = 1;
      scrollT+=1;
      if(win_width<600){
                        
        if(scrollT === 3){
           scrollT = 4;
        }
                        
      }

      if(!activelyScrolling) {
        scrollDownTo(scrollT);  
      }
}


function goUp(){
      if (scrollT > 9) scrollT = 9; 
      if (scrollT <0) scrollT = 2;
      scrollT-=1;
      if(win_width<600){
                          
          if(scrollT === 3){
             scrollT = 2;
          }
                          
      }
      if(!activelyScrolling){
          scrollDownTo(scrollT);  
      }
}


function showStuff(){
      nav.css("opacity","1");
      $('.arrow-nav-container').css("display","block");
}


function scrollDownTo(t){
    var html =  $('html,body');
    
    

    if(flag_m == 1){
        activelyScrolling = true;
        switch(t){
        
           case 1:
               html.animate({scrollTop: $('#home').offset().top}, 1000);
               scrollT = 1;
                
               setTimeout(function(){
                nav.css("opacity","0");
               current.css("display","none");
               $('.arrow-nav-container').css("display","none");
               },500);
                
                break;
          case 2:
            scrollT = 2;
            arrow_down.css("display",disp);
            if($(window).width()<550){
                html.animate({scrollTop: $('.about-container').offset().top - offset_s}, 500);
            }
            else{
                html.animate({scrollTop: $('#about').offset().top - offset_s}, 500);
            }
            setTimeout(function(){
                showStuff();
                nav.css("opacity","1");
                show_nav(aboutChild);    
            },500);
            break;
           
          case 3:
            scrollT = 3;
            arrow_down.css("display",disp);
            html.animate({scrollTop: $('#about').offset().top + $(window).height()-offset_s}, 500);
            current.css("display","none");
            current = aboutChild;
            current.css("display","block");
            showStuff();
            break;

          case 4:
            scrollT = 4;
            arrow_down.css("display",disp);
            $('.slider').slider('start');
            html.animate({scrollTop: $('.tech-expo').offset().top -offset_s}, 500);
            current.css("display","none");
            current = aboutChild;
            current.css("display","block");
            showStuff();
            show_nav(techChild);
            break;

          case 5:
            scrollT = 5;
            arrow_down.css("display",disp);
            html.animate({scrollTop: $('.events').offset().top -offset_s}, 500);
            showStuff();
            show_nav(eventChild);
            break;
          case 6:
            scrollT = 6;
            arrow_down.css("display",disp);
            html.animate({scrollTop: $('.speakers-container').offset().top-offset_s}, 500);
            showStuff();
            show_nav(speakerChild);
            break;
          case 7:
            scrollT = 7;
            arrow_down.css("display",disp);
            html.animate({scrollTop: $('#parvah').offset().top - offset_s}, 500);
            showStuff();
            show_nav(parvaahChild);
            break;
          case 8:
            scrollT = 8;
            arrow_down.css("display",disp);
            html.animate({scrollTop: $('#sponsors').offset().top - offset_s}, 500);
            showStuff();
            show_nav(sponsorChild);
            break;
          case 9:
            scrollT = 9;
            showStuff();
            arrow_down.css("display","none");
            show_nav(contactChild);
            html.animate({scrollTop: $('#contact').offset().top - offset_s}, 500);
             break;
        }
  }
  else{
        html.animate({scrollTop: $('#events').offset().top - offset_s}, 5);
        scrollT-=1;
  }

  setTimeout(function(){
        activelyScrolling = false; scrollT =t; 
  },500);
}
$(document).ready(function(){


      nav = $('nav');
  		aboutChild = $('.current li:nth-child(2)');
      techChild = $('.current li:nth-child(3)')
      eventChild = $('.current li:nth-child(4)');
      speakerChild = $('.current li:nth-child(5)')
      parvaahChild = $('.current li:nth-child(6)');
      sponsorChild = $('.current li:nth-child(7)');
      contactChild = $('.current li:nth-child(8)');
      arrow_up = $('.up-arrow');
      arrow_down = $('.down-arrow');
      current = $('.current li');
      arrow_up = $('.up-arrow');
      arrow_down = $('.down-arrow');

      scrollDownTo(1);




      if ( win.width() > 767) {
            var s = skrollr.init();
      }

      $(".button-collapse").sideNav({
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      });

      $(".parallax").parallax();
                      
      $(".modal-trigger").leanModal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: 0.5, // Opacity of modal background
            in_duration: 300, // Transition in duration
            out_duration: 200, // Transition out duration
            starting_top: "0%", // Starting top style attribute
            ending_top: "0%", // Ending top style attribute
            ready: function() { $("#modal1").toggleClass("slideOutUp");}, // Callback for Modal open
            complete: function(){$("#modal1").toggleClass("slideOutUp");}// Callback for Modal close 
      });



      $('.collapsible').collapsible({});

      $(".slider").slider({
            full_width: true,
            height: win_height*0.9
      });
      $('.slider2').slider({
          full_width: true,
          height: win_height*0.9
});
      $(".slider").slider("pause"); 

    	
});

//om click stuff

$(".viewMore").on("click",function(){
        $(".sponsors").toggleClass("more");
        $("#lastYear .container").toggleClass("more");
        $("#thisYear .container").toggleClass("more");
        $("#sponsors").toggleClass("check");
        if($("#sponsors").hasClass("check")){
              flag_m1 = 0;
              $(".viewMore h5").text("View Less");
        }
        else{
              flag_m1 = 1;
              $(".viewMore h5").text("View More");
             
        }
});
    

      


 $(window).on('resize',function(){
    if ( $(window).width() > 767) {
          var s = skrollr.init();
    }

    if(win_width<550){
          offset_s = win_width*0.1;
          $('.about-container').css('display','block');
          $('.social-mobile').css('display','block');
    }
    else{
          $('.social-mobile').css('display','none');
          $('.about-container').css('display','none');
    }

});

//scrolling stuff

$(".down-arrow").on("click",function(){
        goDown();
        return false;
});
$(".up-arrow").on("click",function(){
        goUp();
        return false;
});

 $("#abhiyantriki-logo").on("click",function(){
        scrollDownTo(1);
});

$(".brand-logo").on("click",function(){

        scrollDownTo(1);
});


 $(document).keydown(function(e){
        if (e.keyCode == 40){
               goDown();
               return false
        }
        else if (e.keyCode == 38){
        
                goUp();
                return false;      
        }
});

//mouse wheel
win.bind("mousewheel", function(e){
      
        
       if(flag_m1==1){
               if(e.originalEvent.wheelDelta < -119) {
                  
                  goDown();
                  return false; 
                }
                else if (e.originalEvent.wheelDelta > 119) {
                    
                  goUp();
                  return false;

              }
       }
});

 //touch pad  scroll

win.bind("wheel", function(e){
      
        
      if(flag_m1==1){
             if(e.originalEvent.deltaY < -0.2) {
              
                goUp();
                return false;
              }
              else if (e.originalEvent.deltaY >=0.2) {
              
                goDown();
                return false;

              }
      }
        
});

 // var lastScrollTop = 0;
 // $(document).on("scroll",function(){

 //      if(flag_m1==1){
 //         alert("here");
 //       var st = $(this).scrollTop();
 //       if (st > lastScrollTop){
          
 //           goDown();
 //          return false;
          
 //       } else {
 //          // upscroll code
 //          goUp();
 //         return false;
 //       }
 //       lastScrollTop = st;
 //    }
 //      }
 //  );