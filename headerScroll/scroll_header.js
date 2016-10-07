jQuery(document).ready(function($) {


    $(document).ready(function() {
        $('body').prepend($('#header').clone(true));
        $('#header').eq(0).addClass('scroll_header');
        $(window).scroll(function() {
            if ($(this).scrollTop() > $('#header').not('.scroll_header').height()) {
                $('.scroll_header').addClass("scroll_header_show");
            } else {
                $('.scroll_header').removeClass("scroll_header_show");
            }
        });
    });
    //直接 對 scroll_header_show 的 Class 來對 要 fadin 的 header 進行 過渡

});
