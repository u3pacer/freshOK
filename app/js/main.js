$(function () {

  $('.header-menu__btn').on('click', function () {
    $('.header-menu__list').toggleClass('header-menu__list--active');
    $('.header-menu__btn').toggleClass('header-menu__btn--active');
  });

  $('.top-slider__wrapper').slick({
    autoplay: true,
    autoplaySpeed: 3000
  })

  $('.pop').magnificPopup({
    type: 'image',
    removalDelay: 500,
    callbacks: {
      beforeOpen: function () {
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    closeOnContentClick: true,
    midClick: true
  });

  var mixer = mixitup('.product-cards');
});