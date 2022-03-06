$(document).ready(function () {

    //     /* magnificPopup img view */
    //     $('.popup-image').magnificPopup({
    //         type: 'image',
    //         gallery: {
    //             enabled: true
    //         }
    //     });

    //     /* magnificPopup video view */
    //     $('.popup-video').magnificPopup({
    //         type: 'iframe'
    //     });

    //for menu active class
    //     $('.portfolio-menu button').on('click', function (event) {
    //         $(this).siblings('.active').removeClass('active');
    //         $(this).addClass('active');
    //         event.preventDefault();
    //     });

    // WOW active
    //     new WOW().init();

    // slick slider for banner 
    // $('.banner-slider').slick({
    //     prevArrow: '<i class="arrows prev icofont-rounded-left"></i>',
    //     nextArrow: '<i class="arrows next icofont-rounded-right"></i>',
    // dots: true,
    //     autoplay: true
    // });

    // my code ----------------------------------------------------------------------
    $.each($('[data-bg-img]'), (index, item) => {
        $(item).css('background-image', $(item).data('bgImg'));
    })
    // preloader
    //     $(".preloader").animate({
    //         top: -2000000
    //     }, 1500);

    // sticky menu ber and go to top button
    //     $(window).scroll(function () {
    //         var scrolled = $(window).scrollTop();
    //         var topMain = $('main').offset().top - 400;

    // go to top button
    //         if (scrolled > topMain) {
    //             $('.go-to-top').addClass('active');
    //             $('.nav-outer').addClass('sticky');

    //             $('.go-to-top').click(function () {
    //                 $(window).scrollTop(0);
    //             });
    //         } else {
    //             $('.go-to-top').removeClass('active');
    //             $('.nav-outer').removeClass('sticky')
    //         }
    // console.log(scrolled);
    //     });

    // menu bar open -------------------------
    $('.mobile-menu-open').click(function () {
        $('.mobile-menu').addClass("active");
        $('.overlay').addClass('active');
    });
    // menu bar close -------------------------
    $('.mobile-menu-close, .overlay').click(function () {
        $('.mobile-menu').removeClass("active");
        $('.overlay').removeClass('active');
    });
    // dropdown toggle ------------------
    //     $('.mobile-navigations li.has-dropdown > i').click(function () {
    //         $(this).parent().find('>ul').slideToggle()
    //     });


});
