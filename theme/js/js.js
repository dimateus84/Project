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
    initFullWidthBlock();
    initSelect();
    initNavMenu();
    initTopMenu();
  }

  function initFlexslider() {
    $(window).load(function () {
      $('.flexslider').flexslider({
        animation: "slade",
        animationLoop: true,
        slideshow: true,
        slideshowSpeed: 3000,
        directionNav: false
      });
    });
  }

  function initFullWidthBlock() {
    var $elements = $('.content-top'),
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

  function initNavMenu() {
    $(document).ready(function () {
      var touch = $('#touch-menu');
      var menu = $('nav ul.menu');

      touch.on('click touch', function (e) {
        e.preventDefault();
        menu.slideToggle();
      });
      $(window).resize(function () {
        var wid = $(window).width();
        if (wid > 480 && menu.is(':hidden')) {
          menu.removeAttr('style');
        }
      });
    });
  }

  function initTopMenu() {
    $(document).ready(function () {
      var touch = $('#touch-top-menu');
      var menu = $('.top-menu ul.menu');

      touch.on('click touch', function (e) {
        e.preventDefault();
        menu.slideToggle();
      });
      $(window).resize(function () {
        var wid = $(window).width();
        if (wid > 480 && menu.is(':hidden')) {
          menu.removeAttr('style');
        }
      });
    });
  }

})(jQuery);