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
    initMobileNav($('.nav'), '.btn-nav', 'nav-active', 'nav-processed');
    initMobileNav($('.top-menu'), '.btn-top-menu', 'top-menu-active', 'top-menu-processed');
  }

  function initMobileNav($navWrapper, btn, activ, processed) {
    var $body = $('body');
    var $btn = $navWrapper.find(btn);

    if ($body.hasClass(processed)) return;

    $body.addClass(processed);

    $btn.on('click touch', checkNav);

    $('html').on('click touch', function (e) {
      if (!$(e.target).closest($navWrapper).length && $body.hasClass(activ)) {
        $body.removeClass(activ);
      }
    });

    function checkNav(e) {
      e.preventDefault();

      if ($body.hasClass(activ)) {
        $body.removeClass(activ);
      } else {
        $body.addClass(activ);
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