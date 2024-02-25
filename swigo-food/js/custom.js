$(document).ready(function(){
    $(".nav-small").on("click",function(){
        $('.section1').slideToggle("1000");
      });


      $('.before-four-div .div-1 ').hover(function(){
       
        $('div-1::after').removeClass("active");
        $(this).addClass("active");
    });

      $('.before-four-div .div-1').hover(function(){
       
        $('.before-four-div .div-1').removeClass("active-new");
        $(this).addClass("active-new");
    });

    $('.main-section .delivery a i ').hover(function(){
       
      $('.delivery a i ').removeClass("shake");
      $(this).addClass("shake");
  });

//   $('.left-div ul li ').hover(function(){
//     $(' ul li ').removeClass("act-tive");
//     $(this).addClass("act-tive");
// });

  });