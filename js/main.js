// for animation of bar and cross in mobile view
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

$("#accordion .card-link").click(function () {
    $(this).children().children().toggleClass("fa-minus");
});

$('#service_insurance_carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-service_insurance_carousel .owl-nav-prev'), $('.owl-navigation-service_insurance_carousel .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 1
        }
    }
});

$('#customer_feedback_carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-customer_feedback_carousel .owl-nav-prev'), $('.owl-navigation-customer_feedback_carousel .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 4
        }
    }
});

$('#service_home_loan_carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-service_home_loan_carousel .owl-nav-prev'), $('.owl-navigation-service_home_loan_carousel .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 4
        }
    }
});