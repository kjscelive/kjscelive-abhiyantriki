var current = $('.current li');
var arrow_up = $('up-arrow');
var arrow_down = $('down-arrow');
var disp = "flex";
var offset_s = $(window).height()*0.1;
var nav;

$(document).ready(function(){
                 nav = $('nav');

 		  aboutChild = $('.current li:nth-child(2)');
                    techChild = $('.current li:nth-child(3)')
                    eventChild = $('.current li:nth-child(4)');
                    speakerChild = $('.current li:nth-child(5)')
                    parvaahChild = $('.current li:nth-child(6)');
                    sponsorChild = $('.current li:nth-child(7)');
                    contactChild = $('.current li:nth-child(8)');
                    // collapsible_header = $('.collapsible-header');
                    // collapsible_strong = $('.collapsible-header p');
                    current = $('.current li');
                    arrow_up = $('.up-arrow');
                    arrow_down = $('.down-arrow');


     
      	current = $('.current li');
	arrow_up = $('.up-arrow');
	arrow_down = $('.down-arrow');
	
 });



 $(window).on('resize',function(){
                           if ( $(window).width() > 767) {
                        var s = skrollr.init();
                      }


                            if($(window).width()<550){
                            offset_s = $(window).height()*0.1;
                            $('.about-container').css('display','block');
                            $('.social-mobile').css('display','block');
                            }
                            else{
                            $('.social-mobile').css('display','none');
                            $('.about-container').css('display','none');
                            }

                      });

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
             html.animate({scrollTop: $('.speaker-header').offset().top-offset_s}, 500);
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
             // show_nav(contactChild);
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