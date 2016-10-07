jQuery(document).ready(function($) {
    function responsive_menu_active($menu) {
        $($menu).after($($menu).clone(true).addClass('responsive-menu'));
        var $responsive_menu = '.responsive-menu';
        var responsive_menu = $($menu + $responsive_menu);
        var $ul = responsive_menu.find('ul');
        $ul.wrapInner('<div class="menu_wrap"></div>');
        $ul.prepend('<div class ="menu_active"><a class="active_item" href="javascript:;">' + $ul.find('a.is-active-trail').text() + '</a></div>');
        $ul.find(".menu_wrap").hide();
        $ul.find('.menu_active').click(function() {
            $ul.find(".menu_wrap").slideToggle("normal", function() {
                // Animation complete.
            });
        });
    }
    //針對指定的menu元素
    responsive_menu_active('.menu_mode1');
    //albatross 列表分類選單
})
