$(document).ready(function() {
  
    var apply = $("#apply").offset().top;
    
    $(window).scroll(function() {
     //   if($(window).scrollTop() == apply)
       // {
         //   $('.parent').toggleClass('visible');

        //}
        
   
       
    if($(window).scrollTop() >= apply)
      { //scrolled past the other div?
          $('.parent').fadeIn(200); //reached the desired point -- show div
    
         
 
      }
      else if($(window).scrollTop() < apply)
      { //scrolled past the other div?
          $('.parent').fadeOut(200); //reached the desired point -- show div
          $('.front').fadeOut(200);

         
    
  
      }
        
      if($(window).scrollTop() > apply)
      {
          $('.parent').fadeIn(200); //reached the desired point -- show div
          $('.front').fadeIn(200);
      }
       
    });

    //when clicked, dropdowns are visible
    $('.parent').click(function() {
    $('.sub-nav').fadeIn(200);
    $('.sub-nav').toggleClass('visible');


  });

  //scrollyy makes it scroll to element
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
//end

    
});


