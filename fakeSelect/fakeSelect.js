jQuery(document).ready(function($) {
    function fake_select($select_object) {
        var select_class = $($select_object).attr('class');
        var active = $($select_object).find('option:selected').html();
        $($select_object).after('<div class ="fake_select ' + select_class + '"><div class ="active"><span>' + active + '</span></div><ul class ="option"></ul></div>');
        var $fake_select = $($select_object + '.fake_select');
        //產生對應的架構
        for (var i = 0; i < $($select_object).children('option').length; i++) {
            var select_text = $($select_object).children('option').eq(i).text();
            var select_value = $($select_object).children('option').eq(i).val();
            $fake_select.find('ul').append('<li class="item' + i + '"><div class ="select">' + select_text + '</div><div class="value">' + select_value + '</div></li>');
            $fake_select.find('.value').css('display', 'none');
        }
        //option fadein
        $fake_select.find('.option').css('display', 'none');
        $fake_select.click(function() {
            $(this).find('.option').fadeToggle("normal", "linear");
        });
        //trigger 原本的 'select' 元素
        $fake_select.find('ul').find('li').each(function() {
            $(this).click(function() {
                var $value = $(this).find('.value').text();
                var $text = $(this).find('.select').text();
                $fake_select.find('.active').text($text);
                $($select_object).val($value).trigger('change');
            });
        });
    }
    //選取你要的select元素,直接把製作成 ul li 的架構
    fake_select('.lang-dropdown-select-element');
})
