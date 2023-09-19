const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
    },
});


document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const section = document.querySelector('.section-1');
        const sectionOffset = section.offsetHeight;

        if (sectionOffset > 400) {
            document.querySelector('.section-1__image').classList.add('active');
            document.querySelector('.section-1__text').classList.add('active');
        }
    });
});
