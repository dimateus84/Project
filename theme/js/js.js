(function ($) {

  if (typeof Drupal != 'undefined') {
    Drupal.behaviors.projectName = {
      attach: function (context, settings) {
        init();
      },

      completedCallback: function () {
        // Do nothing. But it's here in case other modules/themes want to override it.
      }
    }
  }

  $(function () {
    if (typeof Drupal == 'undefined') {
      init();
    }

    $(window).load(function () {

    });
  });

  function init() {
    initFlexslider();
    initFullWidthBlock('.content-top');
    initFullWidthBlock('.text-img-wrapper');
    initSelect();
    initMobileNav('.nav');
    initMobileNav('.top-menu');
    initColum();
    initTabs();
  }


  function initTabs() {

    $('ul.tabs_caption').on('click', 'li:not(.active)', function () {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.b-tabs').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
    });
  }


  function initColum() {
    $('.img ul').columnize({width:260});
  }

  function initMobileNav(navWrapper) {

    var $navWrapper = $(navWrapper);
    var $btn = $navWrapper.find('.btn-nav');

    $btn.on('click touch', checkNav);

    $('html').on('click touch', function (e) {
      if (!$(e.target).closest($navWrapper).length && $navWrapper.hasClass('nav-active')) {
        $navWrapper.removeClass('nav-active');
      }
    });

    function checkNav(e) {
      e.preventDefault();

      if ($navWrapper.hasClass('nav-active')) {
        $navWrapper.removeClass('nav-active');
      } else {
        $navWrapper.addClass('nav-active');
      }
    }
  }

  function initFlexslider() {
    $(window).load(function () {
      $('.flexslider').flexslider({
        animation: "slade",
        animationLoop: true,
        slideshow: true,
        slideshowSpeed: 6000,
        pauseOnHover: true,
        controlNav: false,
        directionNav: false
      });
    });
  }

  function initFullWidthBlock(blok) {
    var $elements = $(blok),
      minWidth = 0;

    $(window).on('resize', setPosition);
    setPosition();

    function setPosition() {
      var $winWidth = $(window).outerWidth(),
        width;

      if ($winWidth > minWidth) {
        width = $winWidth;
      } else {
        width = minWidth;
      }

      $elements.width(width);
      $elements.css('margin-left', '-' + width / 2 + 'px');
    }
  }

  function initSelect() {
    $(document).ready(function () {
      $('select').select2();
    });
  }

})(jQuery);
