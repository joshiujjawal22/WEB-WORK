
// Function for sticky header
$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 30){
      $(".i_body").addClass("sticky-header");
    }else{
      $(".i_body").removeClass("sticky-header");
    }//if-else
  });//win func.
});//ready func.


// ------GALLERY---


$('.gallery ul li a').click(function() {
     var itemID = $(this).attr('href');
     $('.gallery ul').addClass('item_open');
     $(itemID).addClass('item_open');
     return false;
 });
 $('.close').click(function() {
     $('.port, .gallery ul').removeClass('item_open');
     return false;
 });

 $(".gallery ul li a").click(function() {
     $('html, .g_body').animate({
         scrollTop: parseInt($("#top").offset().top)
     }, 400);
 });