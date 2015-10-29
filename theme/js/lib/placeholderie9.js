/**
 * Created by Дмитрий on 29.09.2015.
 */
$(window).load(function () {
    var isInputSupported = 'placeholder' in document.createElement('input');
    var isTextareaSupported = 'placeholder' in document.createElement('textarea');
    if (!isInputSupported || !isTextareaSupported) {
        $('[placeholder]').focus(function () {
            var input = $(this);
            if (input.val() == input.attr('placeholder') && input.data('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function () {
            var input = $(this);
            if (input.val() == '') {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
                input.data('placeholder', true);
            } else {
                input.data('placeholder', false);
            }
        }).blur().parents('form').submit(function () {
            $(this).find('[placeholder]').each(function () {
                var input = $(this);
                if (input.val() == input.attr('placeholder') && input.data('placeholder')) {
                    input.val('');
                }
            })
        });
    }
});