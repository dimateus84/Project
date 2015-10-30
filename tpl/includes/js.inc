<!--[if (lt IE 9) & (!IEMobile)]>
<script type="text/javascript" src="theme/js/lib/html5.js"></script>
<![endif]-->
<script type="text/javascript" src="common/js/lib/jquery.min.js"></script>
<script type="text/javascript" src="theme/js/js.js"></script>
<script src="theme/js/lib/jquery.flexslider.js"></script>
<script src="theme/js/lib/select2.min.js"></script>
<script type="text/javascript">
    $(document).ready(function (){
    $('select').select2();
    }) ;
</script>
<script type="text/javascript" charset="utf-8">
    $(window).load(function () {
        $('.flexslider').flexslider({
            animation: "slade",
            animationLoop: true,
            slideshow: true,
            slideshowSpeed: 3000,
            directionNav: false
        });
    });
</script>
<script type="text/javascript" charset="utf-8">
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
    $(document).ready(function () {
        initFullWidthBlock();
    });
</script>
<!--flex/end-->
<!--fix placeholdr ie9-->
<script src="theme/js/lib/placeholderie9.js"></script>
<!--fix end--->