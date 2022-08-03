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

    // jquery counter 
    $.each($('.time-counter'), function (index, value) {
        // date format MM/DD/YYYY hh:mm:ss
        const htmlTemplate = `
            <div class="time-counter__item">
                <div class="time-counter__number">%D</div>
                <div class="time-counter__text">Days</div>
            </div>
            <div class="time-counter__item">
                <div class="time-counter__number">%H</div>
                <div class="time-counter__text">Hour</div>
            </div>
            <div class="time-counter__item">
                <div class="time-counter__number">%M</div>
                <div class="time-counter__text">Minute</div>
            </div>
            <div class="time-counter__item">
                <div class="time-counter__number">%S</div>
                <div class="time-counter__text">Second</div>
            </div>
		`;

        const date = $(this).data('countEnd');
        const counter = $(this).countdown(date, function (event) {
            $(this).html(event.strftime(htmlTemplate));
        });
    });

    // WOW active
    //     new WOW().init();

    // slick slider for banner 
    $('.sponsors-slider').slick({
        prevArrow: '<i class="arrows prev icofont-rounded-left"></i>',
        nextArrow: '<i class="arrows next icofont-rounded-right"></i>',
        dots: false,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        pauseOnHover: true,
        draggable: false,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                },
            },
        ]
    });

    // setup an intersection observer
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0) {
                // counter to js
                $('.number-success__number').countTo({
                    speed: 2000,
                    delay: 500
                });
            }
        });
    });
    const numberSection = document.querySelector('.number-success');
    if (numberSection) observer.observe(numberSection);

    // magnificPopup video
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // my code ----------------------------------------------------------------------
    $.each($('[data-bg-img]'), (index, item) => {
        $(item).css('background-image', $(item).data('bgImg'));
    })
    // preloader
    //     $(".preloader").animate({
    //         top: -2000000
    //     }, 1500);

    // sticky menu ber and go to top button
    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();

        // go to top button
        if (scrolled > 500) {
            $('.header').addClass('sticky');
            $('.header-proxy').removeClass('hidden');
        } else {
            $('.header').removeClass('sticky');
            $('.header-proxy').addClass('hidden');
        }
    });

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

    $('.download-theme').click(function () {
        const targetUrl = $(this).attr('href');
        window.open(targetUrl, '_blank');
    });
});
