$(document).ready(function() {

/*
Infinity UI JS

Use classes in html divs to trigger components 
Meant to be used together with InfinityUI CSS
*/


navbarMobile();    
function navbarMobile() {    
var navbarmob = $('.iui-navbar-mobile');
var logoimg =  $('.iui-navbar-mobile img');   
var navtitle = $('.iui-navbar-mobile h1');
var mobbtn = $('.iui-navbtn');     
navbarmob.prepend('<div class="iui-title"></div><div class="iui-logo"></div><div class="iui-navbar-btn"></div>');
$('.iui-title').append(navtitle);    
navbarmob.css({'position':'fixed','background':'black','width':'100%','z-index':'950','padding':'20px 10px'});    
 $('.iui-navbar-mobile h1').addClass('iui-white iui-heading-m iui-uppercase iui-weight2 iui-margin-auto iui-top-20 iui-relative');   
$('.iui-logo').append(logoimg);     
$('.iui-logo').css('text-align','center');        
logoimg.css({'position':'relative','width':'70px','margin':'auto','top':'-10px'}); 
$('.iui-navbar-btn').append(mobbtn);    
mobbtn.append('<hr><hr>');    
mobbtn.children('hr').addClass('iui-hr-white');    
mobbtn.children().last('hr').css('width','30px').addClass('iui-margin-0');    
$('.iui-navbar-btn').css({'cursor':'pointer','position':'absolute','right':'30px','top':'40px'});        
mobbtn.css({'width':'45px'});     
} 
//navbar js

iuiCarousel();    
            function iuiCarousel() {   
                
            var carouselsize = $('.iui-carousel img').length;
            var carouselwidth = 100 * carouselsize;
            var carousel = $('.iui-carousel');
            var carimgs = $('.iui-carousel img');    
            var position = carousel.css('right'); 
            var lastimg = $('.iui-carousel img:nth-child('+carouselsize+')').clone();
            var count = 1;      
            var animationSpeed = 600;  
            var intervalTime = 4000;    
            var container = $('.iui-container');
            var imgwidth = 100 / carouselsize; 
            var contheight, contwidth;    
            var rcount = 1;
            var lcount = 0;    
            container.append('<i class="fas fa-angle-left caret"></i> <i class="fas fa-angle-right caret"></i>');  
            var caretleft = $('.fa-angle-left');
            var caretright = $('.fa-angle-right'); 
            var caret = $('.caret');     
            container.append('<hr class="bar">');
            var bar = $('.bar');    
           
           //add fontawesome css
           $('head').append('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">');
             //style bar   
            bar.css({'position':'absolute','top':'0px','border':'none','height':'5px','background':'white','width':'1px','margin':'auto','z-index':'100'}); 
            container.css({'text-align':'center','margin':'auto'});    
           //style carets 
            caret.css({'position':'absolute','top':'45%','bottom':'55%','color':'rgba(255,255,255,0.5)','transform':'scale(4,5)','z-index':'10','cursor':'pointer', 'transition':'all 0.3s'}); 
            caret.hover(function() {
               $(this).css('color','rgba(255,255,255,0.8)'); 
            }, function() {
                $(this).css('color','rgba(255,255,255,0.5)');
            }); 
            //focus carets on hover over container
            container.hover(function() {
               caretleft.css('left','5%'); 
               caretright.css('right','5%');      
            }, function() {
                caretleft.css('left','2%'); 
                caretright.css('right','2%'); 
            });        
            caretleft.css({'left':'2%'}); 
            caretright.css({'right':'2%'});    
                
            //get data-ids
            if (carousel.data('intervaltime') == undefined){
                carousel.data('intervaltime', '5000');
            }
            if (carousel.data('animationspeed') == undefined){
                carousel.data('animationspeed', '600');   
            }    
            if(carousel.data('intervaltime') < 1000) {
                carousel.data('intervaltime', '1000');
            } 
            if (container.data('contheight') == undefined){
                container.data('contheight', '600');   
            }
            if (container.data('contwidth') == undefined){
                container.data('contwidth', '100');   
            }    
            //set container and carousel dimensions based on data-ids    
            intervalTime = carousel.data('intervaltime');
            animationSpeed = carousel.data('animationspeed');    
            contheight = container.data('contheight'); 
            contwidth = container.data('contwidth');        
            container.css('height',contheight+'px'); 
            container.css('width',contwidth+'%');     
            carimgs.css('width',imgwidth+'%'); 
            carousel.css('width',carouselwidth+'%');
            
            //append last image clone to container and give it class contimg
            container.prepend(lastimg);
            lastimg.addClass('iui-contimg');    
            //top bar animation
            bar.animate({width:'100%'},intervalTime,'linear', resetBar);      
            setInterval(function() {
                bar.css('width','0%');
                bar.animate({width:'100%'},intervalTime,'linear', resetBar);
            },intervalTime);     
            function resetBar() {
                bar.css('width','0%');    
            }
             
            //Auto slides carousel plays    
            setInterval(function() {
                 if(count >= carouselsize) {
                     lastimg.animate({right:'100%'},animationSpeed,'swing');
                     carousel.css('right','-100%');
                     count = 0;
                 } 
                lastimg.css('right','0%');   
                count++;
                
            carousel.animate({right:'+=100%'},animationSpeed,'swing');   
            },intervalTime);   
            
            //on click of right carets move slides to right 
            caretright.on('click', function() {
                 if(rcount >= carouselsize) {
                     lastimg.animate({right:'100%'},animationSpeed,'swing');
                     carousel.css('right','-100%');
                     rcount = 0; 
                     lcount = 0; 
                 } 
                lastimg.css('right','0%');
                rcount++;
                lcount++;
                carousel.animate({right:'+=100%'},animationSpeed,'swing');
                resetBar();
            });     
            //on click of left caret move slides to left  
            caretleft.on('click', function() {
                 if(lcount == 0) { 
                     
                 } 
                else {     
                    lastimg.css('right','100%'); 
                     carousel.animate({right:'-=100%'},animationSpeed,'swing');
                     lastimg.animate({right:'0%'},animationSpeed,'swing');
                     lcount--; 
                }
            });        
             
            }
            // end of iui carousel 

     
 
                           
                           
                                                   
                  
                            
                            
                            
                            
});


