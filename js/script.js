
$('.i__one').click(function(){
   $(this).fadeOut()
   $('.i__two').fadeIn()
});
$('.i__two').click(function(){
  $(this).fadeOut()
  $('.i__one').fadeIn()
});



$(function () {

     // =====Closes responsive menu when a scroll link is clicked===== //

     $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    // ======Slick Slider===== //

//     $('.').slick({
//         dots: false,
//         infinite: true,
//         autoplay: true,
//         arrows: false,
//         autoplaySpeed: 1000,
//         speed: 1300,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 }
//     }, {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 }
//     }
//   ]

//     });




    // =====scroll top===== //

    $(".backTotop").click(function(){
        $("html,body").animate({
          scrollTop:0
        },3000)
      })
      
$(window).scroll(function(){
    if($(window).scrollTop()>750){
       $(".backTotop").fadeIn()
    }else{
       $(".backTotop").fadeOut()

    }

    if($(window).scrollTop()>300){
        $(".menu").addClass("fixedmenu")
      }else(
        $(".menu").removeClass("fixedmenu")
      )
  
})
    // ======Smooth Scroll===== //

    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });

  


    // =====Aos Js===== n//

    AOS.init(
        {
            duration: 1000,
        }
    );

// ========== paralax js ===========//
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
});
// venobox
$('.venobox').venobox(); 
