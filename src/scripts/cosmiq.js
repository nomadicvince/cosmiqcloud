$(window).on("scroll", function() {
    if ($(this).scrollTop() > 200) {
       $("#nav").css({
       "background-color": "rgba(145,224,255,1)",
       "transition" : ".9s ease-in-out",
       "height" : "auto"
       });
       $("#main-nav").css({
       "font-size" : "20px",
       "transition" : ".9s ease-in-out"
       });
       $("#logo > img").css({
       "width" : "15%",
       "transition" : ".9s ease-in-out"
       });
       $("#mobile-nav").css({
       "font-size" : "19px",
       "transition" : ".9s ease-in-out"
       });
    } else {
       $("#nav").css("background","rgba(255, 255, 255, .0)");
       $("#main-nav").css("font-size", "25px");
       $("#mobile-nav").css({
       "font-size" : "35px",
       "margin-top" : "15px",
       "transition" : ".9s ease-in-out"
        });
       $("#logo > img").css({
       "width" : "90px",
       "padding" : "15px",
       "transition" : ".9s ease-in-out"
       });
    }
 });

 $(document).ready(function() {
   $( "#mobile-nav" ).click(function() {
     $( "#hidden-nav" ).slideToggle( "slow" ).css("display" , "block");
   });

   $("#hidden-nav ul li").click(function() {
      $("#hidden-nav").fadeOut();
   })
 })

 //Scroll.js

 $(function() {
   $('a[href*="#"]:not([href="#"])').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('html, body').animate({
           scrollTop: target.offset().top
         }, 1000);
         return false;
       }
     }
   });
 });
