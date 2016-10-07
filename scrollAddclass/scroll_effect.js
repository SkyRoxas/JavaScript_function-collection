jQuery(document).ready(function($) {
    function scroll_class($before_class, $after_class) {
        $($before_class).each(function() {
            var $item = $(this);
            //抓取對應物件的 scroll_top的值
            var scroll_top = $item.offset().top - $(window).height();
            //個別判斷對應的 "Class" 是否以出現在畫面中
            if ($(window).scrollTop() > scroll_top) {
                //存在於畫面中:加入指定的 "Class"
                setTimeout(function() {
                    $item.addClass($after_class);
                }, 500);
            } else {
                //不存在於畫面中:移除指定的 "Class"
                setTimeout(function() {
                    $item.removeClass($after_class), 500
                })
            }
        })
    }
    //綁定觸發 scroll_class function 的執行事件（文載入後,畫面滾動時）
    function scroll_class_object($before_class, $after_class) {
        $(document).ready(function() {
            setTimeout(function() {
                scroll_class($before_class, $after_class), 500
            })
        })
        $(window).scroll(function() {
            scroll_class($before_class, $after_class);
        })
    }

    scroll_class_object('.fadeIn', 'fadeIn_play');
    //判別含有 fadeIn 的 class 的元素,當出現於畫面時加入'fadeIn_play'的 class ,來達到執行 '過渡' 的效果

})
